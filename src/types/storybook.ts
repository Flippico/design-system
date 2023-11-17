import { TemplateResult } from 'lit-html';

export interface Story<T> {
  (args: T, context: any): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
  storyName?: string;
  parameters?: Record<string, unknown>;
}
