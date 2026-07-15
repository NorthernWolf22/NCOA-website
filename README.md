<h1>NCOA website</h1>

<h2>Table of contents</h2>
<ul>
    <li>Overview</li>
    <li>Tech stack</li>
    <li>Key features</li>
    <li>Project structure</li>
    <li>Installation</li>
    <li>Future improvements</li>
</ul>

<h3>Overview</h3>
<p>NCOA (Neston company of archers) is a fictional sports club website built with Next.js and TypeScript to demonstrate modern front-end development practices, responsive design, accessibility, and full-stack data integration. The project features a multi-page website, the data for which is stored in a PostgreSQL database and retrieved via Prisma ORM, allowing content to be rendered dynamically using Next.js routing practices. The application has been designed with a strong focus on component reusability and maintainability. A modular architecture, configurable React components, and an atomic 4px spacing system to help maintain vertical and horizontal rhythm as well as making the project fully scalable. The contact form demonstrates both client-side and server-side validation using Zod, providing clear user feedback and ensuring submitted data is validated before reaching the database. TypeScript is used throughout the project to provide strong type safety and improve developer experience. Accessibility was considered from the earliest stages of the design process. Care has been taken to ensure appropriate colour contrast, responsive layouts across different devices, semantic HTML, keyboard accessibility, and clear feedback for user interactions such as form validation.
</p>

<h3>Tech stack</h3>

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-000000?logo=buffer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

<h3>Key features</h3>
<h3>Next.js</h3>
<ul>
    <li><p><strong>Custom API route - </strong>Submitted form data via a REST API to a custom server-side api route handler</p></li>
    <li><p><strong>Client and server side components - </strong>Separated client-side and server-side responsibilities using client and server Components</p></li>
    <li><p><strong>Dynamic routes - </strong>Utilised dynamic routing to render news articles using the article id as the parameter</p></li>
    <li><p><strong>Search parameters - </strong>Implemented URL-based filtering using search parameters (?category=...) at server-side in the App Router</p></li>
    <li><p><strong>Image optimisation - </strong>Utilised Next.js’s built‑in, performance‑optimised image component that automatically handles sizing, formats, lazy loading, and layout stability</p></li>
    <li><p><strong>Links - </strong>Link is Next.js’s built‑in, performance‑optimised navigation component that gives you fast client‑side routing with automatic prefetching and seamless page transitions</p></li>
    <li><p><strong>Meta data - </strong>Utilised the metadata object that Next.js uses to populate the HTML title and description tags</p></li>
    <li><p><strong>Error routes - </strong></p></li>
    <li><p><strong>Not found routes - </strong></p></li>

</ul>

<h3>Typescript</h3>
<ul>
    <li><strong>Type alias - </strong><p>Created and maintained custom TypeScript type aliases using the type keyword</p></li>
    <li><p><strong>Strongly typed - </strong>Used strongly typed data throughout e.g. useState< ContactFormData></p></li>
    <li><strong>Prop types - </strong><p>Defined custom prop type aliases within components</p></li>
    <li><strong>Parameter types - </strong><p>Typed function parameters to enforce the structure of the expected incoming arguments</p></li>
    <li><strong>Function returns - </strong><p>Explicitly declared function return types e.g. void for improved code clarity and type safety</p></li>
    <li><strong>Array types - </strong><p>Used array typing (NewsArticle[]) to ensure collections only contain valid news article objects</p></li>
    <li><strong>Functions as props - </strong><p>Passed typed functions as props between parent and child components</p></li>
    <li><strong>Type inference - </strong><p>Leveraged TypeScript's type inference for local component state objects</p></li>
    <li><p><strong>Event handlers - </strong>Typed React event handlers (ChangeEvent, SubmitEvent)</p></li>
    <li><p><strong>Utility types - </strong>Used utility types (Partial<Record<...>>) for field-level validation errors, this approach ensures the contact form error state type will be automatically updated should there be changes made to the form field schema inferred by zod, they are synchronised</p></li>
    <li><p><strong>Custom aliases - </strong>Implemented type-safe state management with custom interfaces and type aliases</p></li>
    <li><p><strong>Using typescripts built in features - </strong>Leveraged TypeScript's keyof operator for dynamic error mapping</p></li>
</ul>

<h3>React</h3>
<ul>
  <li><p><strong>Architecture - </strong>Built a component-based application architecture</p></li>
  <li><p><strong>Hooks - </strong>Managed application data with state hooks (useState, useEffect, etc)</p></li>
  <li><p><strong>Controlled inputs - </strong>Implemented controlled form inputs using React state</p></li>
  <li><p><strong>Avoiding state mutation - </strong>Used state immutability patterns when updating arrays and objects</p></li>
  <li><p><strong>Spread operator - </strong>Amended state or passed props using the spread operator</p></li>
  <li><p><strong>Array methods - </strong>Filtered the article categories using the Array.filter() method and rendered dynamic data by using the .map() method</p></li>
  <li><p><strong>Callback props - </strong>Used callback props to allow child components to trigger parent state updates</p></li>
  <li><p><strong>Reusable components - </strong>Built reusable components like form and button</p></li>
  <li><p><strong>Configurable components - </strong>Created components which can be configured depending on requirements by using prop driven design techniques</p></li>
  <li><p><strong>Form submissions - </strong>Implemented form submission handling with use of .preventDefault() method. Handled form data collection and managed resetting of form fields post submission</p></li>
  <li><p><strong>Accessibility - </strong>Colour contrast was considered to ensure WCAG compliance and created fully accessible form fields by associating labels with their inputs and providing strong feedback for submission errors as well as confirmation of success</p></li>
  <li><p><strong>Conditional classes - </strong>Use of conditional class rendering ensured responsive design with dynamic styling</p></li>
</ul>

<h3>Zod</h3>
<ul>
    <li><p><strong>Schema - </strong>Defined a strongly typed validation schema for the contact form</p></li>
    <li><p><strong>Inferance - </strong>Generated TypeScript types directly from the validation schema</p></li>
    <li><p><strong>String validation - </strong>Applied string validation (min, max, trim, email)</p></li>
    <li><p><strong>Enums - </strong>Validated enum values for predefined enquiry types</p></li>
    <li><p><strong>Cross-field validation - </strong>Implemented conditional cross-field validation using superRefine()</p></li>
    <li><p><strong>Runtime validation - </strong>Used safeParse() to perform runtime validation without throwing exceptions</p></li>
    <li><p><strong>Transforming data - </strong>Transforming the issues returned from zod, converting them in to a format easier to access in the UI to validate form field errors</p></li>
</ul>

<h3>Prisma ORM & PostgreSQL</h3>
<ul>
    <li><p><strong>Relational - </strong>Designed and implemented a relational database schema using Prisma ORM</p></li>
    <li><p><strong>1 to 1 relationships - </strong>Creating one-to-many relationships between database models e.g. Accordion and accordion items</p></li>
    <li><p><strong>Foreign keys - </strong>Using foreign keys and Prisma @relation fields to maintain related table data</p></li>
    <li><p><strong>Primary keys - </strong>Defining primary keys with auto-incrementing IDs</p></li>
    <li><p><strong>Unique constraints - </strong>Using unique constraints (@unique) to enforce data uniqueness (e.g. page slugs)</p></li>
    <li><p><strong>Compound unique constraints - </strong>Creating compound unique constraints using @@unique to prevent duplicate ordered items within a parent record</p></li>
    <li><p><strong>Enums - </strong>Using Prisma enums to restrict values to predefined options (e.g. ArticleCategory, EnquiryType)</p></li>
    <li><p><strong>Required vs optional fields - </strong>Defining optional and required fields to accurately model application data</p></li>
    <li><p><strong>Default values - </strong>Configuring default values (e.g. @default(now()) for timestamps and autoincrement() for IDs)</p></li>
    <li><p><strong>Ordered content - </strong>Modelling ordered collections of data using explicit ordering fields (linkOrder, accordionOrder, carouselOrder)</p></li>
    <li><p><strong>Normalised database design - </strong>Applied database normalization principles to reduce data duplication and create reusable content structures</p></li>
    <li><p><strong>Database queries - </strong>Queried a PostgreSQL database using Prisma ORM</p></li>
    <li><p><strong>DRY principles - </strong>Configured a reusable PrismaClient instance to avoid repeated client creation</p></li>
    <li><p><strong>PostgreSQL adapter - </strong>Connected Prisma to PostgreSQL using the Prisma PostgreSQL adapter (@prisma/adapter-pg)</p></li>
    <li><p><strong>Prisma query options - </strong>Used Prisma query options (orderBy) to retrieve sorted data</p></li>
    <li><p><strong>Prisma types - </strong>Utilised Prisma-generated TypeScript types for end-to-end type safety</p></li>
</ul>


<h3>Project structure</h3>
<p>The project structure highlights the architectural approach, folder organisation, and naming conventions that support a scalable and maintainable codebase.</p>

<div>
    <details>
        <summary><strong>public</strong></summary>
        <ul>
            <li>
                images
                <ul>
                    <li>two_archers.jpg</li>
                </ul>
            </li>
        </ul>
    </details>
    <details>
        <summary><strong>src</strong></summary>
        <ul>
            <li>
                app
                <ul>
                    <li>
                        about-us
                        <ul>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        api
                        <ul>
                            <li>
                                contact
                                <ul>
                                    <li>route.ts</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        contact-us
                        <ul>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        cookie-policy
                        <ul>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        faqs-policy
                        <ul>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        news
                        <ul>
                            <li>
                                [newsArticleId]
                                <ul>
                                    <li>page.ts</li>
                                </ul>
                            </li>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        privacy-policy
                        <ul>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        terms-and-conditions-policy
                        <ul>
                            <li>page.tsx</li>
                        </ul>
                    </li>
                    <li>
                        layout.tsx
                    </li>
                    <li>
                        page.tsx
                    </li>
                </ul>
            </li>
            <li>
                components
                <ul>
                    <li>AccordionComponent.tsx</li>
                    <li>...</li>
                </ul>
            </li>
            <li>
                lib
                <ul>
                    <li>prisma.ts</li>
                </ul>
            </li>
            <li>
                modules
                <ul>
                    <li>AccordionModule.tsx</li>
                    <li>...</li>
                </ul>
            </li>
            <li>
                services
                <ul>
                    <li>getAccordion.ts</li>
                    <li>...</li>
                </ul>
            </li>
            <li>
                validation
                <ul>
                    <li>contact.ts</li>
                    <li>...</li>
                </ul>
            </li>
        </ul>
    </details>
</div>

<h3>Set up & Installation</h3>
<p>To clone and start the project open a command line terminal and run the following commands in the order provided:</p>
<ol>
  <li>git clone https://github.com/NorthernWolf22/NCOA-website.git</li>
  <li>cd NCOA-website</li>
  <li>npm install</li>
  <li>npm run dev</li>
</ol>

<h3>Future improvements</h3>
<ul>
  <li>Add log in / sign up functionality</li>
  <li>Set up user permissions for administrator access</li>
  <li>Add functionality for administrators to amend or delete news articles</li>
</ul>