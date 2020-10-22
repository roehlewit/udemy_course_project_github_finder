class Github{
 constructor(){
     this.config = {
        headers: {
          Authorization: '793d8b7d96e8b40590b8d6e40a08997c40357ce9'
        }
      }
      this.repos_count = 5
      this.repos_sort = 'created: asc'
}


 async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}`,
    this.config)
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json()
         
    return {
      profile,
      repos
    }
 }
}