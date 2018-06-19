import vscode from "vscode";
import "./Commands";
import { register } from "./Services/CommandRegistry";

const commands: ICommandDefinition[] = require("../package.json").contributes.commands;

export interface ICommandDefinition {
  command: string;
  title: string;
}

export const activate = (context: vscode.ExtensionContext): void => {
  commands.forEach((command: ICommandDefinition) => register(command, context));
};
