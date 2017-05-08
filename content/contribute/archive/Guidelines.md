<!--{
title: "Open Docs Markdown Style Guide and Contribution Guidelines"
description: "Guidelines for formatting Contrast support documentation"
category: "Style Guide", "Open Documentation Project"
tags: "contribute OpenDocs Github"
}-->

***Want to contribute to OpenDocs?***  Great! We want to make it easy and keep things consistent so below you'll find some general guidelines to help YOU help US. Thanks in advance!


## Updates
    
Staying up-to-date with news and information about Contrast is as easy as subscribing to our **RSS feed**.  Just click the RSS icon in the top right corner of the page to get set up. (Coming soon).


## Sharing

You can share support content directly using the Tweet button at the top of each article.  We encourage you to to spread the word about Contrast by tagging **#contrastsecurity** in your tweets and of course, feel free to [follow us](https://twitter.com/contrastsec)!


## Reporting Bugs

See a problem?  Use our **Support Widget** in the bottom right of the page to contact us via Zendesk.  You can also click the **Bug icon** from any article to create an issue in GitHub.

---

## Making a Pull Request

### Editing Existing Articles

To submit edits of existing content, click the **Edit icon** at the top of the article.  This will bring you to the source within the GitHub repo.  Click the Edit icon again to make changes.  At the bottom of the page, provide a brief description of your revisions and select **Create a new branch for this commit and start a pull request** before selecting **Commit changes**. Name the branch according to its topic and Contrast will review your submission. For more information on pull requests, check out [GitHub Help](https://help.github.com/articles/using-pull-requests/).


### Submitting New Content

OpenDocs support documentation is comprised of markdown files. Should you want to write and submit new content, we'd like to receive it in markdown format.  This [GitHub Guide](https://guides.github.com/features/mastering-markdown/) can get you started, and we've outlined some more specific formatting guidelines below as well.

---

## Markdown Formatting

### File Names

- File names will include no spaces and capitalize each word in the title:

>*InstallingOnTomcat.md*


### Metadata

- Header information to include **Title**, **Description** and **Category**, enclosed within **{ }**. 

- The title does not need to be repeated within the article content and should not include code snippets. Try to avoid questions with personal pronouns as well, i.e.:

>"How Do I Apply an EOP License?" > **"How To Apply An EOP License"**

- **Description** will briefly describe the content of the file and **Category** will contain relevant tags or labels.


### Headings

- Headings will start at **h2** and move down from there, as appropriate to the organization of content sections and sub-sections:

>## This is an H2
>### This is an H3
>#### This is an H4

- Heading content will **not** use numeration, i.e. **Section 1.1: Installation**.

### Images

- Images will use html to define relative links and Lightbox functionality.  
- Images are located in ***docs/assets/images***.

Example:

```
<a href="assets/images/KB2-a01_1.png" rel="lightbox" title="System Tray Icon"><img class="thumbnail" src="assets/images/KB2-a01_1.png"/></a>
```


### Code

- Use for short in-line references to variable or property names, i.e. ```true```as well as for multi-line code samples:

```
Sample code goes here.
Here is more sample code.
```


### Text

- Use a single *greater-than* sign to denote a string of actions/selections.

>Tools **>** Servers 


#### Capitalization

- Headings and titles should be capitalized (all words)

>**How To Apply An EOP License**


#### Use of Bold Font

- For emphasis:

>Do *this*
>
>**Do Not** do this

- Within the software interface:

>Locations (**Settings > License Settings**)
>
>Categories/Labels/Elements (**Platform** tab)
>
>Actions (Click **Submit**)
>
>Names (i.e. a server name)
>
>Terms that might otherwise be in quotations
>
>File types (e.g. **JAR**)


#### Use of Italicized Font

- For emphasis:

>If you *do* want to set the parameter...

- File names (***contrast.exe***)

- Directories (***C://Documents/Users/..***)

- When many terms are being referenced/emphasized (instead of bold), for example, see the [Glossary](user_tsfaq.html#glossary) article.


### Lists

- Periods should not be included in list items unless each point contains multiple sentences

- When list items include full sentences or multiple lines of text, leave one line of space between each item


### Links

- When there are several references to other articles, use a **See Also** section at the bottom of the page under which to list relevant links. (See [Java Agent System Properties](user_javaconfig.html#props2) for an example).


### Notes

- The word **"Note:"** should be in bold.

>**Note:** Lorem ipsum


### Numbers

- Within general text, spell out numbers **zero - nine** and use numbers for 10 and above.

---

## Other Open-Source Projects

We've got a handful of open-source projects here at Contrast. Use the links below to check out some of our other repositories!

* [Contrast SDK Java](https://github.com/Contrast-Security-OSS/contrast-sdk-java)
* [Cassandra Migration](https://github.com/Contrast-Security-OSS/cassandra-migration)
* [Contrast SDK .NET](https://github.com/Contrast-Security-OSS/contrast-sdk-dotnet)
* [Contrast Jenkins](https://github.com/Contrast-Security-OSS/contrast-jenkins-plugin)
* [Spring Security](https://github.com/Contrast-Security-OSS/spring-security)
* [Contrast New Relic Plugin](https://github.com/Contrast-Security-OSS/contrast-newrelic-plugin)

