import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

const postsDirectory = path.join(process.cwd(), "posts");

// 递归获取子文件夹下的文件
async function recursionFolder(allFiles: Array<string>, dirPath: string = postsDirectory) {
    let fileNames: Array<{url: string, id: string}> = []
    for (let i = 0; i < allFiles.length; i++) {
      const fileName = allFiles[i];
      const filePath = path.join(dirPath, fileName);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        const subFiles = await fs.readdir(filePath);
        let innerFiles = await recursionFolder(subFiles, filePath)
        fileNames.push(...innerFiles)
      } else {
        fileNames.push({url: filePath.replace(postsDirectory,''), id: fileName})
      }
    } 
    return fileNames
}

// 获取文章ID列表
export async function getAllPostIds(): Promise<{ id: string, url: string }[]> {
    // 读取 posts 目录下的所有文件
    const fileNamesBase = await fs.readdir(postsDirectory);
    let fileNames = await recursionFolder(fileNamesBase)
    // 过滤出 .md 文件，并生成路径参数
    return fileNames
      .filter((fileName) => fileName.id.endsWith(".md")) // 只处理 .md 文件
      .map((fileName) => ({
        url:fileName.url.replace(/\.md$/, ""),
        id: fileName.id.replace(/\.md$/, ""), // 去掉 .md 后缀
      }));
  }


// 获取文章内容
export async function getPost(id: string) {
    const markdownWithMeta = await fs.readFile(
      path.join("posts", id + ".md"),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    const processedContent = await remark()
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content);
      
    const contentHtml = processedContent.toString();

    frontmatter.categories = Array.isArray(frontmatter.categories) ? frontmatter.categories : [frontmatter.categories || "Default"]
    
    return {
        id,
        contentHtml,
        frontmatter,
    }
}

// 获取所有文章列表+内容
export async function getAllPostList() {
    const ids = await getAllPostIds()
    console.log('ids',ids)
    const list  = await Promise.all(ids.map(m => getPost((m.url))))
    return list.sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date))
}