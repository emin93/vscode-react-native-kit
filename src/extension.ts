import vscode from "vscode";
import { register } from "./Services/CommandRegistry";

const commands: ICommand[] = require("../package.json").contributes.commands;

export interface ICommand {
  command: string;
  title: string;
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vscode-react-native-kit" is now active!');

  commands.forEach(register);
  let disposable = vscode.commands.registerCommand("extension.sayHello", () => {
    vscode.window.showInformationMessage("Hello World!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
