import { commands, ExtensionContext } from "vscode";
import { Command } from "../Commands";
import { ICommandDefinition } from "../Extension";

export const commandRegistry = new Map<string, Command>();

export const register = (command: ICommandDefinition, context: ExtensionContext): void => {
  context.subscriptions.push(commands.registerCommand(command.command, commandRegistry.get(command.command)));
};
