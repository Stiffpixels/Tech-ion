const {DateTime} = require("luxon");

module.exports = function(eleventyConfig){
  eleventyConfig.addFilter("postDate", (dateobj) => {
    return DateTime.fromJSDate(dateobj).toLocaleString(DateTime.Date_Med);
  });
  
  eleventyConfig.addCollection("descendingSort", (collectionApi)=>{
    return collectionApi.getFilteredByTag("main").sort((a,b)=>{
      return b.date - a.date;
    });
  });
  
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/index.js');
  eleventyConfig.addPassthroughCopy('./src/herostyle.css');
  eleventyConfig.addPassthroughCopy('./src/admin');
  return{
    dir:{
      input: "src",
      output: "public"
    }
  };
};