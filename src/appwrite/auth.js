/* eslint-disable no-useless-catch */
import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client);
  }
  
  async createAccount({ email, password , name}) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
        );
        if (user) user; //this.login({email,password})
        else user;
    } catch (error) {
      throw error;
    }
  }
  
  async userLogin({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  
  async getCurrentUser() {
    try {
      await this.account.get()
    } catch (error) {
      console.log(error);
    }
  }
  
  async logout (){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }
}
const authService = new AuthService();

export default authService;
