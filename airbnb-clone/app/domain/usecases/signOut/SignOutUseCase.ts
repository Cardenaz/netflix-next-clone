export class SignOutUseCase {
    private authService: any; 
    constructor(authService: any) {
        this.authService = authService; 
    }
    async execute() :Promise<void> {
       await this.authService.signOut(); 
    }
}