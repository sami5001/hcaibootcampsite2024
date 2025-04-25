// Description: This file contains the functions to read YAML files.
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const contentDirectory = path.join(process.cwd(), 'content');

export function getYamlData(folder: string, filename: string) {
  const fullPath = path.join(contentDirectory, folder, `${filename}.yml`);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  return yaml.parse(fileContents);
}