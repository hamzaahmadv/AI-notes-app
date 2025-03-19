## prompt 

## <new idea npx> i want to prompt this for my headers home and notes to the cursor AI agent
convert this 21st dev mcp prompt for the above purpose:

## prompt 

"I’m using the Magic MCP (Model Context Protocol) in my Cursor agent workflow to manage components in my project. First, use the Magic MCP protocol to install the AuroraBackground component from 21st.dev, located at the URL https://21st.dev/r/aceternity/aurora-background. This is a UI component, and the Magic MCP should install it into the @/components/ui directory of my project, ensuring all necessary configurations and dependencies are handled automatically.

After installation, implement this component in my Notes App’s home page, which is located in the file HomePage.tsx (or index.tsx if HomePage.tsx doesn’t exist). Since I’m using Next.js 13+ with the app directory, the HomePage.tsx file should remain a server component. To handle animations with Framer Motion, create a separate client component named AnimatedContent.tsx in the /components directory with the "use client" directive at the top. The AnimatedContent.tsx component should contain all the Framer Motion animation logic, while HomePage.tsx should import and use this client component.

The implementation should be as similar as possible to the example shown, with the following details:

In AnimatedContent.tsx, use the AuroraBackground component as a wrapper.
Inside it, add a motion.div from framer-motion with an animation that fades in (opacity from 0 to 1) and slides up (y from 40 to 0) over 0.8 seconds with a 0.3-second delay and an 'easeInOut' easing function.
Inside the motion.div, add a heading with the text 'Welcome to Notes App' styled with Tailwind CSS classes text-3xl md:text-7xl font-bold dark:text-white text-center.
Below the heading, add a subheading with the text 'Organize your thoughts beautifully' styled with Tailwind CSS classes font-extralight text-base md:text-4xl dark:text-neutral-200 py-4.
Below the subheading, add a button with the text 'Start Writing' styled with Tailwind CSS classes bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2.
The motion.div should have the Tailwind CSS class relative flex flex-col gap-4 items-center justify-center px-4 for layout.
In HomePage.tsx, simply import and render the AnimatedContent component without any additional logic, ensuring it remains a server component.

Ensure all required dependencies, such as framer-motion, are installed and managed through the Magic MCP protocol if they are not already present in my project. Do not change any other functionalities in my app, and make sure the implementation works with my existing Tailwind CSS setup (I have tailwind.config.js in my project)."



## Refined Prompt for Better Results
To make the prompt more effective, we need to:

Clarify the installation and implementation steps.
Specify the home page file (e.g., HomePage.tsx or index.tsx).
Describe the desired output (text, button, animations, and styling) in detail.
Ensure Magic MCP is used appropriately (if it’s a tool Cursor can interact with).
Explicitly mention dependencies like framer-motion.