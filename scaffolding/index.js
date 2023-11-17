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
  
    actions: data => {
      const componentType = data.area.split('/')[1];
      const component = componentType[0].toUpperCase() + componentType.slice(1);
  
      const actions = [
        {
          type: 'add',
          path: `./../src/${data.area}/{{name}}.ts`,
          templateFile: './component/index.ts.hbs',
          abortOnFail: true,
          data: { ...data, component },
        },
        {
          type: 'add',
          path: `./../src/${data.area}/{{name}}.stories.ts`,
          templateFile: './component/stories.ts.hbs',
          abortOnFail: true,
          data: { ...data, component },
        },
        {
          type: 'add',
          path: `./../src/${data.area}/{{name}}.types.ts`,
          templateFile: './component/types.ts.hbs',
          abortOnFail: true,
          data: { ...data, component },
        },
        {
          type: 'add',
          path: `./../src/${data.area}/{{name}}.styles.ts`,
          templateFile: './component/styles.ts.hbs',
          abortOnFail: true,
          data: { ...data, component },
        },
        {
          type: 'add',
          path: `./../src/${data.area}/{{name}}.test.ts`,
          templateFile: './component/test.ts.hbs',
          abortOnFail: true,
          data: { ...data, component },
        },
      ];
      return actions;
    },
  });
};
