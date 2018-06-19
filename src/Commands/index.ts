import { commandRegistry } from "../Services/CommandRegistry";
import createProject from "./CreateProject";

export type Command = () => Promise<void>;

commandRegistry.set("extension.createProject", createProject);
