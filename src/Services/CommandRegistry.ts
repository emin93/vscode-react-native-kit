import { commands } from "vscode";
import { ICommand } from "../Extension";

export const register = (command: ICommand): void => {
  commands.registerCommand(command.command);
};
