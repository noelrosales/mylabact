const JokeService = {
    getOne: () => {
        return $.ajax({
            type: 'get',
            url: 'https://geek-jokes.sameerkumar.website/api',
        })
    }
}