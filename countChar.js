let countBs = function(string, character){
    
        let count = 0;
        for (let i = 0; i<=string.length; i++){
            if (string[i] == character){
                count++
            }
            
        }
        console.log("Number of" + character + " in this string is "+count);
        return count;
}
countBs("Build your app on GitHub's platform Not sure where to start? We’ve put together some handy guides and reference documentation you can use to start building.","g");