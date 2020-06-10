export default interface IWebTokenProvider {
  generateToken(userId: string): string;
}
