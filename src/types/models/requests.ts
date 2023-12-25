export interface IdeaRequestParams {
  text: string;
}

export interface IdeaOverviewRequestParams {
  idea: string;
  title: string;
  question: string;
  text?: string;
}

export interface IdeaDetailRequestParams {
  idea: string;
  title: string;
  question: string;
  overview: string;
  title_detail: string;
  question_detail: string;
  purpose: string;
  text?: string;
}

export interface IdeaSolutionRequestParams {
  idea: string;
  message: string;
}
