import * as fs from "fs";
import { describe, it, expect } from "vitest";
import { loadTemplate, replaceTemplateVariables, buildPrompt } from ".";

describe("Test suite for basic functions", () => {
  it("should load template", () => {
    const template = loadTemplate();
    const fileContent = fs.readFileSync("src/templates/test.md", "utf8");
    expect(template).toBe(fileContent);
  });

  it("Replace template variables", () => {
    const template = "Hello {{name}}";
    const variables = { name: "World" };
    const replacedString = replaceTemplateVariables(template, variables);
    expect(replacedString).toBe("Hello World");
  });
  it("Build custom prompt template", () => {
    const variables = { name: "Promptpresser" };
    const prompt = buildPrompt(variables);
    expect(prompt).toBe(`# You are an chat respondant

Tone: Be professional and kind
User: Talk to the user with the name Promptpresser
`);
  });
});
