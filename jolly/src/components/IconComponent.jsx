import React from "react";
import { DiUnitySmall } from "react-icons/di";

const IconComponent = () => {
  return (
    <div>
      <h1>This is icon usage in React.js</h1>
      <p>Here is an example of how to use an icon:</p>
      <pre>
        <code>
          {`import React from "react";\n`}
          {`import { DiUnitySmall } from "react-icons/di";\n`}
          {`\n`}
          {`const IconComponent = () => {\n`}
          {`  return (\n`}
          {`    <div>\n`}
          {`      <h1>This is icons usage in react js</h1>\n`}
          {`      <DiUnitySmall color="black" />\n`}
          {`    </div>\n`}
          {`  );\n`}
          {`};\n`}
          {`\n`}
          {`export default IconComponent;`}
        </code>
      </pre>
      <DiUnitySmall size={100} color="yellow" />
    </div>
  );
};

export default IconComponent;
