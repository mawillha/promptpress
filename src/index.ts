import * as fs from "fs";

const replaceTemplateVariables = (
  template: string,
  variables: { [key: string]: string }
): string => {
  let templateText = template;
  Object.keys(variables).map((key) => {
    const regex = new RegExp(`{{${key}}}`, "g");
    console.log(regex);
    return regex;
  }, template);
  return templateText;
};

// Function to load the markdown file and apply variable values
const buildPrompt = (variables: { [key: string]: string }): string => {
  const filePath = "./prompt.md";
  const fileContent = fs.readFileSync(filePath, "utf8");
  return replaceTemplateVariables(fileContent, variables);
};

export { buildPrompt };
