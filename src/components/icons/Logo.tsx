import React from "react";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      width="107"
      height="144"
      fill="none"
      viewBox="0 0 107 144"
    >
      <path
        fill="#000"
        d="M2.688 79.12c0-5.504 1.024-10.336 3.072-14.496 2.112-4.16 4.96-7.36 8.544-9.6 3.584-2.24 7.584-3.36 12-3.36 3.52 0 6.72.736 9.6 2.208 2.944 1.472 5.248 3.456 6.912 5.952V34.96h16.416V106H42.816v-7.68c-1.536 2.56-3.744 4.608-6.624 6.144-2.816 1.536-6.112 2.304-9.888 2.304-4.416 0-8.416-1.12-12-3.36-3.584-2.304-6.432-5.536-8.544-9.696-2.048-4.224-3.072-9.088-3.072-14.592zm40.128.096c0-4.096-1.152-7.328-3.456-9.696-2.24-2.368-4.992-3.552-8.256-3.552-3.264 0-6.048 1.184-8.352 3.552-2.24 2.304-3.36 5.504-3.36 9.6s1.12 7.36 3.36 9.792c2.304 2.368 5.088 3.552 8.352 3.552 3.264 0 6.016-1.184 8.256-3.552 2.304-2.368 3.456-5.6 3.456-9.696z"
      ></path>
      <path
        fill="#000"
        d="M5.76 64.624l-.892-.453-.005.011.897.442zm8.544-9.6l.53.848-.53-.848zm21.6-1.152l-.455.89.008.004.447-.894zm6.912 5.952l-.832.555 1.832 2.748v-3.303h-1zm0-24.864v-1h-1v1h1zm16.416 0h1v-1h-1v1zm0 71.04v1h1v-1h-1zm-16.416 0h-1v1h1v-1zm0-7.68h1v-3.61l-1.858 3.096.858.514zm-6.624 6.144l-.47-.882-.009.004.479.878zm-21.888-1.056l-.54.841.01.007.53-.848zM5.76 93.712l-.9.436.004.008.004.009.892-.453zm33.6-24.192l-.727.687.01.01.717-.697zm-16.608 0l-.717-.697.717.697zm0 19.392l-.735.677.009.01.01.01.716-.697zm16.608 0l-.717-.697-.01.01.727.687zM3.688 79.12c0-5.38 1-10.055 2.97-14.054l-1.795-.884c-2.127 4.321-3.175 9.31-3.175 14.938h2zm2.964-14.043c2.038-4.015 4.768-7.071 8.182-9.205l-1.06-1.696c-3.754 2.346-6.72 5.69-8.906 9.995l1.784.906zm8.182-9.205c3.418-2.136 7.233-3.208 11.47-3.208v-2c-4.595 0-8.78 1.168-12.53 3.512l1.06 1.696zm11.47-3.208c3.376 0 6.418.705 9.145 2.098l.91-1.78c-3.033-1.55-6.391-2.318-10.055-2.318v2zm9.153 2.102c2.804 1.402 4.969 3.275 6.527 5.613l1.664-1.11c-1.77-2.654-4.213-4.75-7.297-6.291l-.894 1.788zm8.359 5.058V34.96h-2v24.864h2zm-1-23.864h16.416v-2H42.816v2zm15.416-1V106h2V34.96h-2zm1 70.04H42.816v2h16.416v-2zm-15.416 1v-7.68h-2V106h2zm-1.858-8.195c-1.434 2.391-3.501 4.318-6.237 5.777l.942 1.764c3.024-1.613 5.373-3.782 7.01-6.511l-1.715-1.03zm-6.245 5.781c-2.645 1.443-5.77 2.182-9.409 2.182v2c3.914 0 7.38-.797 10.367-2.426l-.958-1.756zm-9.409 2.182c-4.237 0-8.052-1.072-11.47-3.208l-1.06 1.696c3.75 2.344 7.935 3.512 12.53 3.512v-2zm-11.46-3.201c-3.42-2.199-6.153-5.29-8.192-9.308l-1.784.906c2.185 4.303 5.148 7.675 8.895 10.084l1.082-1.682zM6.66 93.276c-1.972-4.067-2.972-8.777-2.972-14.156h-2c0 5.63 1.048 10.647 3.172 15.028l1.8-.872zm37.156-14.06c0-4.29-1.212-7.796-3.74-10.393l-1.433 1.394c2.081 2.14 3.173 5.098 3.173 8.999h2zm-3.73-10.383c-2.429-2.568-5.444-3.865-8.982-3.865v2c2.99 0 5.479 1.071 7.53 3.24l1.453-1.375zm-8.982-3.865c-3.538 0-6.58 1.296-9.069 3.855l1.434 1.394c2.118-2.177 4.645-3.249 7.635-3.249v-2zm-9.069 3.855c-2.468 2.538-3.643 6.015-3.643 10.297h2c0-3.91 1.065-6.833 3.077-8.903l-1.434-1.394zM18.392 79.12c0 4.284 1.176 7.811 3.625 10.47l1.47-1.356c-2.031-2.205-3.095-5.206-3.095-9.114h-2zm3.643 10.49c2.49 2.558 5.531 3.854 9.069 3.854v-2c-2.99 0-5.517-1.072-7.635-3.25l-1.434 1.395zm9.069 3.854c3.538 0 6.553-1.297 8.983-3.865l-1.454-1.374c-2.05 2.168-4.54 3.239-7.529 3.239v2zm8.973-3.855c2.527-2.597 3.739-6.102 3.739-10.393h-2c0 3.901-1.092 6.86-3.173 8.999l1.434 1.394z"
      ></path>
      <path
        stroke="#000"
        strokeWidth="16"
        d="M76.781 28.19S43.356 50.344 78.88 67.33c35.524 16.983-4.635 37.945-4.635 37.945"
      ></path>
    </svg>
  );
};

export default Logo;
