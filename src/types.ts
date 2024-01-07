export type Ioptions =
  | undefined
  | {
      skipPrompts: boolean;
      git: boolean;
      skipGit: boolean | undefined;
      folderName: string | undefined;
      template: string | undefined;
      runInstall: boolean;
      skipInstall: boolean;
      help: boolean;
      version: string | boolean;
    };

export type IPromptType = {
  type: string;
  name: string;
  message: string;
  default?: string;
};
