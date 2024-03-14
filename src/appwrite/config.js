/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class appwriteDatabase {
  Client = new Client();
  database;
  bucket;
  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.database = new Databases(this.Client);
    this.bucket = new Storage(this.Client);
  }

  async createPost({ title, slug, content, featuredImages, status, userId }) {
    try {
      await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImages, status, userId }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async updatePost(slug, { title, content, featuredImages, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImages,
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getDocument(slug) {
    try {
      return this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
    }
  }
  async listDocuments(query = [Query.equal("status", "active")]) {
    try {
      return this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        query
      );
    } catch (error) {
      console.log(error);
    }
  }

  // upload file
  async fileUpload(file) {
    {
      try {
        return await this.bucket.createFile(
          conf.appwriteBucketId,
          ID.unique(),
          file
        );
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }

  async deleteDocument(fileId) {
    try {
        await this.bucket.deleteFile(conf.appwriteBucketId , fileId)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.getFilePreview, fileId)
  }
}
