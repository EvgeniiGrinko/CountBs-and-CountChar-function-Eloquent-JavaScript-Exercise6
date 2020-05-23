let countBs = function(string){
    
        let count = 0;
        for (let i = 0; i<=string.length; i++){
            if (string[i] =="b"|| string[i] == "B"){
                count++
            }
            
        }
        console.log("Number of letters 'B' or 'b' in this string is "+count);
        return count;
}
countBs("Build your app on GitHub's platform Not sure where to start? We’ve put together some handy guides and reference documentation you can use to start building.");