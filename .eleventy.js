module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/index.js')
  return{
    dir:{
      input: "src",
      output: "public"
    }
  };
};