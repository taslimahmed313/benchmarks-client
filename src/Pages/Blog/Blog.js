import React from 'react';

const Blog = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-6 my-8">
        <div className=" border border-indigo-500 lg:h-[700px] shadow-2xl rounded-2xl p-5">
          <p className="font-semibold">
            What are the different ways to manage a state in a React
            application?
          </p>
          <p>
            In React apps, there are at least seven ways to handle the state.
            Let us briefly explore a few of them in this part. <br />
            <strong className="font-bold underline">URL</strong> <br />
            It is recommended to avoid storing such information in the app’s
            state to avoid the URL in our app getting out of sync. The URL
            should be used as the system of record, Read from it as needed for
            information related to sorting, pagination, etc. Update the URL as
            required when the settings change React Router is a great tool to
            handle routes and manage the params. <br />
            <strong className=" font-bold underline">Web Storage</strong> <br />
            The second option is to store the state in the browser via web
            storage. This is useful when we want to persist state between
            reloads and reboots. Examples include cookies, local storage, and
            IndexedDB. These are native browser technologies. Data persisted in
            the browser is tied to a single browser. So, if the user loads the
            site in a different browser, the data will not be available. <br />
            <strong className="font-bold underline">Lifted State</strong> <br />
            The Fourth option is to define the state in the parent component.
            Often, the same state is used across multiple components. In those
            cases, it is useful to lift the state to a common parent. The
            lifting state is a two‑step process. First, we declare the state in
            a common parent component, and then we pass the state down to child
            components via props.
          </p>
        </div>
        <div className=" border border-indigo-500 lg:h-[700px] shadow-2xl rounded-2xl p-5">
          <p className="font-bold"> How does prototypical inheritance work?</p>
          <p>
            {" "}
            JavaScript is a prototype-based, Object Oriented programming
            language. After the ES6 updates, JavaScript allowed for “prototypal
            inheritance”, meaning that objects and methods can be shared,
            extended, and copied. Sharing amid objects makes for easy
            inheritance of structure (data fields), behavior (functions /
            methods), and state (data values). JavaScript is the most common of
            the prototype-capable languages, and its capabilities are relatively
            unique. When used appropriately, prototypical inheritance in
            JavaScript is a powerful tool that can save hours of coding. Today,
            we want to get you acquainted with prototypal inheritance in
            JavaScript to get you up to date with the ES6 capabilities.
          </p>
        </div>
        <div className=" border border-indigo-500 lg:h-[700px] shadow-2xl rounded-2xl p-5">
          <p className="font-bold">
            What is a unit test? Why should we write unit tests?
          </p>
          <p>
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object. In SDLC, STLC, V Model, Unit testing
            is first level of testing done before integration testing. Unit
            testing is a WhiteBox testing technique that is usually performed by
            the developer. Though, in a practical world due to time crunch or
            reluctance of developers to tests, QA engineers also do unit
            testing.
          </p>
        </div>
        <div className=" border border-indigo-500 lg:h-[700px] shadow-2xl rounded-2xl p-5">
          <p>
            <strong className="font-bold underline">Angular</strong> <br />
            Angular, developed by Google, was first released in 2010, making it
            the oldest of the lot. It is a TypeScript-based JavaScript
            framework. A substantial shift occurred in 2016 on the release of
            Angular 2 (and the dropping of the “JS” from the original name –
            AngularJS). Angular 2+ is known as just Angular. Although AngularJS
            (version 1) still gets updates, we will focus the discussion on
            Angular. <br />
            <strong className=" font-bold underline">React</strong> <br />
            React, developed by Facebook, was initially released in 2013.
            Facebook uses React extensively in their products (Facebook,
            Instagram, and WhatsApp). Similar to Vue, the React developers also
            announce their newest version on the blog section of the React
            website.
            <strong className=" font-bold underline">Vue</strong> <br />
            Vue, also known as Vue.js, is the youngest member of the group. It
            was developed by ex-Google employee Evan You in 2014. Over the last
            several years, Vue has seen a substantial shift in popularity, even
            though it doesn’t have the backing of a large company. The most
            current version is always announced on the official Vue website on
            their releases page. Contributors for Vue are supported by Patreon.
            It should be noted that Vue also has its own GitHub repo, and
            functions using TypeScript.
          </p>
        </div>
      </div>
    );
};

export default Blog;