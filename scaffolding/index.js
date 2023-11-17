import utils from 'handlebars-helpers';
utils();

export default (plop) => {
  plop.setGenerator("component", {
    description: 'Add new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What the component name?',
        default: 'flp-your-component',
        validate: (value, { area }) => {
          if (!/^flp-/.test(value)) {
            return 'A component should start with flp prefix';
          }
          return true;
        },
      },
    ],
  
    actions: data => {;
      const actions = [
        {
          type: 'add',
          path: `./../src/components/{{name}}/{{name}}.ts`,
          templateFile: './component/index.ts.hbs',
          abortOnFail: true,
          data,
        },
        {
          type: 'add',
          path: `./../src/components/{{name}}/{{name}}.stories.ts`,
          templateFile: './component/stories.ts.hbs',
          abortOnFail: true,
          data,
        },
        {
          type: 'add',
          path: `./../src/components/{{name}}/{{name}}.types.ts`,
          templateFile: './component/types.ts.hbs',
          abortOnFail: true,
          data,
        },
        {
          type: 'add',
          path: `./../src/components/{{name}}/{{name}}.styles.ts`,
          templateFile: './component/styles.ts.hbs',
          abortOnFail: true,
          data,
        },
        {
          type: 'add',
          path: `./../src/components/{{name}}/{{name}}.test.ts`,
          templateFile: './component/test.ts.hbs',
          abortOnFail: true,
          data,
        },
      ];
      return actions;
    },
  });
};
