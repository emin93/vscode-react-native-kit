import { camelCase, upperFirst } from "lodash";
import { window } from "vscode";

const languages = {
  js: "JavaScript / Flow",
  ts: "TypeScript"
};

export default async (): Promise<void> => {
  let command = "react-native init";

  const name = upperFirst(
    camelCase(
      await window.showInputBox({
        placeHolder: "MyApp",
        prompt: "What name do you want to use for your new project?"
      })
    )
  );

  command = `${command} ${name}`;

  const language = await window.showQuickPick(Object.values(languages), {
    placeHolder: "Which language do you want to use for your new project?"
  });

  switch (language) {
    case languages.ts:
      command = `${command} --template typescript && node/setup.js`;
      break;
  }

  const terminal = window.createTerminal();
  terminal.sendText(command);
  terminal.show();
};
