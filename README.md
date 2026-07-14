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


<h3>Next.js features</h3>
<ul>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
</ul>

<h3>Typescript features</h3>
<ul>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
</ul>

<h3>React features</h3>
<ul>
  <li><p><strong>Architecture - </strong>Built a component-based application architecture</p></li>
  <li><p><strong>Hooks - </strong>Managed application data with state hooks</p></li>
  <li><p><strong>Controlled inputs - </strong>Implemented controlled form inputs using React state</p></li>
  <li><p><strong>Avoiding state mutation - </strong>Used state immutability patterns when updating arrays and objects</p></li>
  <li><p><strong>Spread operator - </strong>Added new records to state using the spread operator</p></li>
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
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
</ul>

<h3>Prisma ORM</h3>
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
</ul>

<h3>PostgreSQL</h3>
<ul>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
    <li><p><strong>Example - </strong>lorum ipsum</p></li>
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