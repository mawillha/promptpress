import * as fs from "fs";

const replaceTemplateVariables = (
  template: string,
  variables: { [key: string]: string }
): string => {
  return Object.keys(variables).reduce((content, key) => {
    const regex = new RegExp(`{{${key}}}`, "g");
    return content.replace(regex, variables[key]);
  }, template);
};

// Function to load the markdown file and apply variable values
const buildPrompt = (variables: { [key: string]: string }): string => {
  const filePath = "./prompt.md";
  const fileContent = fs.readFileSync(filePath, "utf8");
  return replaceTemplateVariables(fileContent, variables);
};

export { buildPrompt };
