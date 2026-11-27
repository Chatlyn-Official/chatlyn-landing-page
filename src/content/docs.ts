/** Chatlyn's public help docs (chatlyn.in/docs). Prices and plan limits stay on the pricing page. */

export type DocBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  blocks: DocBlock[];
};

export type DocCategory = { title: string; pages: DocPage[] };

const h2 = (text: string): DocBlock => ({ type: "h2", text });
const p = (text: string): DocBlock => ({ type: "p", text });
const steps = (...items: string[]): DocBlock => ({ type: "steps", items });
const list = (...items: string[]): DocBlock => ({ type: "list", items });
const note = (text: string): DocBlock => ({ type: "note", text });

export const DOC_CATEGORIES: DocCategory[] = [
  {
    title: "Getting started",
    pages: [
      {
        slug: "create-account",
        title: "Create your account",
        description: "Sign up, complete your profile and get to know your workspace.",
        blocks: [
          h2("Sign up"),
          steps(
            "Open the signup page and sign up with your email and a password, or with Google.",
            "Your first workspace is created for you, and you become its Owner.",
            "When the dashboard opens, enter your WhatsApp number with the country code, for example +919876543210. Google sign-ups can also set a password here.",
          ),
          h2("Free trial"),
          p("If a free trial is available for your account, a popup offers it after sign-up. Choose Start now or Start later. A trial can be used once per person, and buying any plan replaces it."),
          h2("Forgot your password"),
          p("Use Forgot password on the login page to get a reset link by email. Reset links work for email and password accounts. If you signed up with Google, log in with Google instead."),
          note("For your safety, you are signed out after 7 days and need to log in again."),
        ],
      },
      {
        slug: "connect-whatsapp",
        title: "Connect your WhatsApp number",
        description: "Connect a number through Meta's official WhatsApp Cloud API.",
        blocks: [
          p("Chatlyn uses Meta's official WhatsApp Cloud API. You connect your number once from Settings."),
          h2("Connect a number"),
          steps(
            "Go to Settings and open the Integrations tab.",
            "Click Connect. Meta's signup window opens.",
            "Choose or create your Business Manager, WhatsApp Business Account and phone number, then finish Meta's steps.",
            "If the number still needs registering, enter a 6-digit PIN when Chatlyn asks. If two-step verification is already on for the number, enter that existing PIN.",
          ),
          note("A number belongs to one workspace at a time. Connecting it in another workspace disconnects it from the first one."),
          h2("Edit your WhatsApp profile"),
          p("In Settings, open the WhatsApp Profile tab to change your business details. The profile picture must be a JPG or PNG under 5 MB, and the website must start with http:// or https://."),
          h2("Opt-in and opt-out keywords"),
          p("When a customer sends an opt-out keyword (by default stop, unsubscribe or remove), they stop receiving your messages. An opt-in keyword (by default start, subscribe or allow) brings them back. You can change the keywords and confirmation messages in the opt-in settings."),
        ],
      },
      {
        slug: "account-verification",
        title: "Account verification",
        description: "Why paid workspaces are verified before sending template messages.",
        blocks: [
          p("When a workspace on a paid plan connects WhatsApp, its account is verified by the Chatlyn team. Workspaces on the Free plan and on a free trial don't go through this."),
          steps(
            "After you connect, the Owner gets a notice that verification is pending.",
            "The Chatlyn team contacts the Owner to complete the setup in Meta Business Manager.",
            "Once verified, the Owner is notified and everything is unlocked.",
          ),
          note("Until your account is verified, template messages can't be sent. That includes broadcasts, template replies, flows, POS invoices and API sends. Replies inside the 24-hour window keep working."),
        ],
      },
    ],
  },
  {
    title: "Inbox",
    pages: [
      {
        slug: "team-inbox",
        title: "Team Inbox",
        description: "Reply to customers together from one WhatsApp number.",
        blocks: [
          p("Inbox shows every conversation on your WhatsApp number in real time. You can send text, media, voice notes, locations and templates."),
          h2("The 24-hour window"),
          p("When a customer messages you, a 24-hour window opens. Inside it you can send any type of message. After it closes, you can only send an approved template until the customer writes again."),
          h2("Assign and transfer chats"),
          list(
            "People who can assign chats can give any chat they can see to anyone.",
            "Team Leads can assign chats to themselves or their team.",
            "Team members can claim an unassigned chat and transfer their own chats to a teammate.",
          ),
          h2("Intervene and take over"),
          p("A chat nobody has taken shows an Intervene button instead of the message box. Intervene makes the chat yours (it moves to the Intervened tab) and opens the box. People who can assign chats see Take over on a teammate's chat."),
          h2("Resolve and reopen"),
          p("Resolve a chat when the work is done. Resolving also releases it: the next time the customer writes, the chat is open to the whole team again (or goes to automatic assignment). The person handling the chat, or anyone who can assign chats, can resolve it."),
          h2("Chat rules for a team member"),
          p("In Settings > Team, Chat rules limits a member to chats whose contact matches, for example Tag is Demo. The Owner always sees every chat."),
          h2("Requesting tab"),
          p("When a flow reaches a Request Intervention step, the chat appears in the Requesting tab. Flows stay quiet on that chat until your team resolves it."),
          h2("Who sees which chats"),
          p("What each person sees depends on their role. Some roles see every chat, others see the unassigned queue, their team's chats or only chats assigned to them. Phone numbers are hidden for people without permission to see them."),
          h2("Media limits"),
          list("Images: up to 5 MB", "Videos: up to 16 MB", "Documents: up to 100 MB", "Captions: up to 1,024 characters"),
          note("Your plan decides how far back inbox history goes. Older messages are hidden, not deleted, and come back if you move to a plan with longer history."),
        ],
      },
      {
        slug: "inbox-filters",
        title: "Live Chat tabs, History and filters",
        description: "What Active, Requesting, Intervened and History mean, and how to filter chats.",
        blocks: [
          h2("The three Live Chat tabs"),
          p("Live Chat shows chats whose 24-hour window is open (the customer wrote in the last 24 hours)."),
          list(
            "Active: open chats nobody has taken over yet. A flow or your welcome message may be answering.",
            "Requesting: the customer asked to talk to a person (a flow's Request Intervention step) and nobody has picked it up.",
            "Intervened: a team member has taken the chat over.",
          ),
          h2("History"),
          p("History holds every other chat: the customer hasn't written for 24 hours, or never replied (for example after a broadcast). From History you can only send an approved template; when the customer writes back, the chat moves to Live Chat."),
          h2("Show"),
          list(
            "All: every chat in the tab.",
            "Mine: chats assigned to you.",
            "My team: chats assigned to people who report to you.",
            "Unassigned: chats nobody is assigned to.",
            "Unread: chats with messages nobody has opened yet.",
            "Needs Reply: the customer sent the last message.",
            "Resolved: chats marked as done.",
          ),
          h2("Filters"),
          p("Add filters on the contact, the same as on the Contacts page: tags, opted in, blocked, segment, list, lead stage, campaigns, custom attributes and more. Filters are joined with \"and\": a chat shows only when every filter matches. A filter turns red until it has a value."),
          h2("Live Chat settings"),
          list(
            "Auto-resolve Chat: chats with no message for 24 hours are resolved automatically.",
            "Read receipts: customers see blue ticks when your team opens their chat.",
            "Typing indicator: customers see typing… while an agent writes (needs read receipts).",
          ),
          note("Find these under Settings > Inbox."),
        ],
      },
      {
        slug: "whatsapp-calling",
        title: "WhatsApp Calling",
        description: "Make and receive WhatsApp voice calls in your browser.",
        blocks: [
          p("Calling lets your team talk to customers on WhatsApp from the browser. It's a paid add-on, included on Enterprise. Set it up in the Calling tab of Settings."),
          h2("Incoming calls"),
          p("Everyone who can see the chat and take calls hears it ring. The first person to click Answer gets the call, and it stops ringing for the others. Incoming calls are free."),
          h2("Outgoing calls"),
          steps(
            "Open the chat and click Call in the header.",
            "If the customer hasn't allowed calls yet, send a permission request with Ask permission while the 24-hour window is open.",
            "Once the customer taps Allow, you can call them for the next 7 days.",
          ),
          p("Outgoing calls use credits and are billed in 6-second pulses. Credits for 5 minutes are held when a call starts, and whatever isn't used goes back to your balance. A call ends if your credits run out."),
          note("A number also used on the WhatsApp Business app (coexistence) can't use calling. Business calls aren't allowed by Meta to some countries, including the US and Canada."),
        ],
      },
    ],
  },
  {
    title: "Audience",
    pages: [
      {
        slug: "contacts",
        title: "Contacts",
        description: "Manage customers, tags, attributes and imports.",
        blocks: [
          p("Everyone who messages your number is saved as a contact automatically. You can also add contacts yourself or import them."),
          h2("Import contacts"),
          steps(
            "Open Contacts and start an import.",
            "Upload a CSV or Excel file with name and phone_number columns.",
            "Wait for the import to finish. It shows how many rows were created, updated or failed.",
          ),
          note("Write phone numbers with the country code. Rows with invalid numbers are skipped, and each number can only be one contact."),
          h2("Tags"),
          p("Use tags to group customers, then target them in broadcasts and use them in flows."),
          h2("Custom attributes"),
          p("Attributes hold extra details about a customer, like city or order number. They can be text, a number or a date. Use them in broadcasts and flows, for example $city in a flow message."),
          h2("Filter, broadcast and save as a segment"),
          p("Click Filter to show only the contacts that match: tags, custom fields, when they were added or last messaged you, source, how they responded to a campaign, chat status, an open 24-hour window, opt-in, name or phone. Choose whether all conditions must match or any one is enough."),
          p("Select the contacts you want (or select all) and click Broadcast to start a broadcast to exactly them. With a filter on, Save as Segment keeps it as a segment you can pick in any broadcast."),
          h2("Export"),
          p("Export contacts as CSV or Excel. This depends on your plan and role, and phone numbers stay hidden for people without permission to see them."),
        ],
      },
    ],
  },
  {
    title: "Messaging",
    pages: [
      {
        slug: "templates",
        title: "Templates",
        description: "Create message templates and get them approved by Meta.",
        blocks: [
          p("Templates are pre-approved messages. You need one to start a conversation or to message someone outside the 24-hour window."),
          h2("Create a template"),
          steps(
            "Open Templates and create a new one.",
            "Enter a name, then pick a category (Marketing, Utility or Authentication) and a language.",
            "Add an optional header (text, image, video or document), the body, an optional footer and buttons.",
            "Use variables like {{1}} and {{2}} in order, and give a sample value for each.",
            "Save it as a draft, or submit it to Meta for review.",
          ),
          h2("Template status"),
          list(
            "Pending: Meta is reviewing it.",
            "Approved: ready to send. Only approved templates can be sent.",
            "Rejected: fix it and submit again.",
            "Paused: Meta paused it.",
          ),
          p("Use Sync to get the latest status from Meta. Chatlyn also checks regularly by itself."),
          h2("Authentication templates (OTP)"),
          p("Authentication templates send one-time passwords, such as login codes. Their text is written by Meta and can't be changed: \"123456 is your verification code.\" WhatsApp does this so that nobody can send fake or misleading code messages. You choose the security line, the expiry line, the button text and the language, and Meta shows its text in that language. See WhatsApp OTP (login codes)."),
          note("The name and language can't change after creation, so duplicate the template instead. If Meta moves a template to another category, you are told and broadcasts using it are paused, so you aren't charged an unexpected rate."),
        ],
      },
      {
        slug: "broadcasts",
        title: "Broadcasts",
        description: "Send a message to many customers at once.",
        blocks: [
          h2("Send a broadcast"),
          steps(
            "Open Broadcast, click New Campaign and pick Broadcast Campaign (or CSV Broadcast to start from a file).",
            "Campaign Details: give the campaign a name (each broadcast needs its own name) and choose the audience: selected contacts, all subscribed contacts, tags, a saved segment, people from an earlier campaign, or an uploaded CSV or Excel file with a phone column.",
            "Create Message: choose a Template Message (an approved template) or a Regular Message (see below). For a template, fill each variable from a contact field, an attribute, a file column or fixed text; the preview shows the result.",
            "Test & Preview: send yourself a test, check the exact recipient count and credit cost (opted-out contacts and duplicates are removed), and turn on retries if you want them.",
            "Send now, or schedule it for later (up to 2 months ahead).",
          ),
          h2("Regular messages"),
          p("A regular message is a normal text, image, video or document with no template. WhatsApp only allows it to people who messaged you in the last 24 hours, so everyone else in the audience is left out (the review step shows how many). It can't go to an uploaded list, and it isn't charged per message. To reach everyone, send a template."),
          h2("Daily messaging limit"),
          p("WhatsApp limits how many people your number can start conversations with in 24 hours (your tier, for example 1,000). A template broadcast to more people than are left today can't be sent now: schedule it for later, or send it to fewer people. A broadcast bigger than the whole daily limit can't go out on any day, so split the audience. The dashboard shows how much of today's limit is left."),
          h2("Retry failed messages"),
          p("Turn on Retry failed messages on the review step to send failed messages again automatically, up to 3 times, a few hours apart, within 24 hours of sending. Only failures that can pass are retried, such as WhatsApp's limit on marketing messages per person. Numbers not on WhatsApp, opt-outs and template problems stay failed. The report's Scheduled Retries section shows each round, and you can stop retries there."),
          h2("API campaigns"),
          p("An API campaign is one approved template your own system sends, one person at a time (for example an abandoned cart or a payment confirmation). Create it with New Campaign > API Campaign; it is live straight away and shows the exact API call to use. Each send appears in its report like a broadcast message. Pause it to refuse calls for a while, or stop it for good."),
          h2("While it's sending"),
          p("You can follow progress live, and pause, resume or cancel the campaign. If credits run out during sending, the campaign pauses and nothing is marked as failed. Add credits and click Resume to continue."),
          h2("The campaigns list"),
          p("The tabs split the list into All, Broadcast, API, Scheduled (waiting for their time) and QR Scan (your QR code campaigns with scans and leads). A clock next to the type means the campaign was scheduled."),
          p("Download Report saves the campaigns you are looking at as a CSV. Overview Report adds them up: sent, delivered, read, replied, failed and credits, with delivery, read and reply rates. User Report lists every person each campaign went to, with their status and times, for campaigns created in the days you pick (up to 92 days)."),
          h2("Reports and retargeting"),
          p("Each campaign has a report with delivery, read and reply numbers, plus per-person link clicks when you use click tracking. Failed messages show the reason in plain words."),
          p("The report shows the campaign type, message type, when it was created, scheduled, started and completed, how long it took, and the credits used. On the Failed tab, Smart segregation lets you tick failure reasons to see, export or broadcast to only those people."),
          p("From any tab of the report you can send a new broadcast to a group of its people: for example delivered but not read, read but not replied, replied within 1, 3 or 24 hours, tapped a given button, or failed (also split into numbers that may not be on WhatsApp and other failures)."),
          h2("Segments"),
          p("Segments are saved audiences that update by themselves as your contacts change. Copy a segment to make a variation, or archive one to hide it from broadcasts without deleting it (it still counts toward your plan's segment limit)."),
          note("Your credits must cover every recipient before a broadcast can start. Credits needed by other scheduled broadcasts are kept aside, so two campaigns can't count on the same credits."),
        ],
      },
    ],
  },
  {
    title: "Automation",
    pages: [
      {
        slug: "flows",
        title: "Flows",
        description: "Build chatbots that reply to customers automatically.",
        blocks: [
          p("A flow is a chatbot you build on a canvas. It starts on a trigger, sends messages, asks questions and hands the chat to your team when needed."),
          h2("Build your first flow"),
          steps(
            "Open Flows and click Create Flow.",
            "In the Flow Start card, add keywords that should start the flow.",
            "Drag a card from the left panel onto the canvas, or tap it.",
            "Connect Flow Start to the card using its dot, and keep building.",
            "Click Save Changes.",
            "Turn on the Active switch at the top right of the canvas.",
          ),
          h2("Ways to start a flow"),
          list(
            "Keywords: the flow starts when a customer sends the keyword.",
            "Regex: the flow starts when a message matches your pattern. Turn on the toggle for case-sensitive matching.",
            "Templates: pick up to 5 templates, and a tap on one of their quick reply buttons starts the flow. Click-tracking templates aren't listed.",
          ),
          p("The settings icon on Flow Start opens more options, including other trigger types and guards like cooldown and business hours."),
          h2("Saving and going live"),
          list(
            "On an inactive flow, Save Changes only saves your work.",
            "On an active flow, Save Changes puts your changes live straight away.",
            "If an active flow has errors, your work is saved but customers stay on the last good version until you fix them.",
          ),
          h2("When a flow is running"),
          p("A customer who is partway through a flow continues with it. If they keep replying with something the flow can't use, the flow ends after 3 tries."),
          note("How many flows can be live at once depends on your plan."),
        ],
      },
      {
        slug: "flow-cards",
        title: "Flow cards",
        description: "What each card in the flow builder does.",
        blocks: [
          h2("Message types"),
          list(
            "Text Buttons: a message with up to 3 buttons. Each button has its own path.",
            "Media Buttons: an image, video, document or audio with a caption.",
            "List: a menu of options. Each row has its own path.",
            "Whatsapp Forms: opens a WhatsApp Form you've made in Meta.",
            "Catalogue Message: sends your WhatsApp catalogue.",
            "Single Product and Multi Product: send products from a catalogue synced with Meta.",
            "Template: sends an approved template.",
          ),
          h2("Actions"),
          list(
            "Request Intervention: hands the chat to your team. It appears in the Requesting tab of Inbox.",
            "Condition: goes down True or False. Choose Equal, Exists, Time In or Date In.",
            "Connect Flow: moves the customer into another active flow.",
            "Ask Question: captures a reply in an attribute. Choose Any, Number, Email, Date or Regex to check the answer.",
            "Ask Media: asks for a file, checks its type and captures it.",
            "Ask Address and Ask Location: ask for an address or a shared location and save it in attributes.",
            "Set Attribute: saves a value on the contact.",
            "Add Tag: adds one or more tags to the contact.",
            "API Request: calls your own system. A flow can have up to 5.",
          ),
          h2("Using attributes in text"),
          p("Type $ and the attribute name in any message, like Hi $firstname. Built-in attributes are name, firstname, lastname and mobilenumber, and your custom attributes work the same way. Text that isn't an attribute, like $500, stays as you wrote it."),
          h2("Set Delay"),
          p("Set Delay makes a card wait the number of seconds you enter before it runs."),
          h2("Add Content"),
          p("Add Content on a Text Buttons card adds the next card and connects it for you."),
          h2("Advanced cards"),
          p("Open Advanced in the left panel for extra cards, such as Wait for Reply, Keyword Router, Webhook, Switch, Loop and Code."),
          note("Some cards, like Whatsapp Pay and Meta Conversions Api, are coming soon."),
        ],
      },
      {
        slug: "api-request",
        title: "API Request in flows",
        description: "Send data to your own system and use the response in a flow.",
        blocks: [
          steps(
            "Add an API Request card and click its URL field.",
            "Choose GET, POST, PUT, PATCH or DELETE, and enter the URL.",
            "Fill in Params, Headers and Body as your system needs. Use attributes like $firstname.",
            "Click Test to try the request. Attributes about the customer aren't filled in during a test.",
            "Under Capture response in Attribute, pick an attribute and enter where the value is in the response, for example data.id.",
            "Click Save.",
          ),
          h2("Choose the next step by status code"),
          p("Add a Custom Status Code, like 200, to give that response its own path. Anything else goes down Status Fallback, including a request that couldn't complete."),
          h2("Keep API keys safe"),
          p("Add secrets in Flows under Global Attributes, then use them in API Request as $name or {{global.name}}. They're never put into messages to customers."),
          note("Requests must go to a public address and time out after 10 seconds. Redirects aren't followed, and a request is never repeated automatically."),
        ],
      },
    ],
  },
  {
    title: "Ads",
    pages: [
      {
        slug: "click-to-whatsapp-ads",
        title: "Click-to-WhatsApp Ads",
        description: "Run Facebook and Instagram ads that open a WhatsApp chat with you.",
        blocks: [
          h2("Set up"),
          steps(
            "Open Ads Manager, then Setup.",
            "Click Connect Facebook and allow everything Meta asks for (choose Opt into all for your business and Pages).",
            "Choose the Facebook Page your ads will run from, and accept the Lead Form Terms of Service if you plan to run Lead Form ads.",
            "Check that your WhatsApp number is linked.",
          ),
          note("Meta charges your ads to the payment method on your own ad account. Chatlyn does not take money for ad spend."),
          h2("Run your first ad"),
          steps(
            "Click Create Ad.",
            "Destination: choose the objective and performance goal.",
            "Audience: pick locations, age, gender and placements, or a saved audience.",
            "Budget: set a daily budget, a start date and, if you like, an end date.",
            "Creative: add the ad name, text and an image, video or carousel. The preview on the right shows how it will look.",
            "Icebreakers (optional): add up to 5 quick questions people can tap; each can start a flow.",
            "Click Publish. Meta reviews the ad before it runs. Tick Publish as paused to set it up without running it.",
          ),
          h2("Manage your ads"),
          list(
            "The switch on each ad turns it on or off.",
            "The chart icon opens the ad's analytics: summary, metrics, conversions, insights by platform, age or gender, and the people who messaged you from it.",
            "Edit Ad changes the audience, budget, end date and creative. The start date, objective and icebreakers of a published ad stay as they are.",
            "Duplicate Ad starts a new ad with the same settings. Save to Draft keeps a half-finished ad for later.",
            "Download Report gives an overall or a day-by-day CSV of your ads.",
          ),
          h2("Leads and forms"),
          p("Everyone who messages you from an ad shows in Leads. Lead Form submissions come in with Sync from Meta. In Forms you can turn on automation to send a WhatsApp template to each new lead of a form."),
        ],
      },
    ],
  },
  {
    title: "Commerce",
    pages: [
      {
        slug: "catalogue",
        title: "Meta Catalogue",
        description: "Manage products and send them in WhatsApp.",
        blocks: [
          steps(
            "In Settings, open the Commerce tab and connect your Meta Commerce account.",
            "Open Meta Catalogue and use Sync & Status to bring in your catalogues and products.",
            "Add or edit catalogues and products in Chatlyn. Changes are made in Meta too.",
          ),
          p("You can then send products in flows using the Catalogue Message, Single Product and Multi Product cards."),
          note("If requests start failing, your Meta connection may have expired. Reconnect it in Settings."),
        ],
      },
      {
        slug: "pos",
        title: "POS and invoices",
        description: "Bill walk-in customers and send invoices on WhatsApp.",
        blocks: [
          h2("Set up"),
          steps(
            "Open POS Settings and enter your business details and invoice prefix.",
            "Choose an approved template with a document header, or click Create default template and wait for Meta's approval.",
            "Add your items in POS Catalogues and POS Products.",
          ),
          h2("Create an invoice"),
          steps(
            "Open New Invoice and pick products or add free items.",
            "Enter quantities, discount, advance, and the customer's name and number.",
            "Save it. The PDF invoice goes to the customer on WhatsApp and shows in Inbox.",
          ),
          p("Invoice History lists every invoice with its status. Use Send again to resend one."),
          note("The discount can't be more than the invoice amount, and the advance can't be more than the total."),
        ],
      },
    ],
  },
  {
    title: "Insights",
    pages: [
      {
        slug: "analytics",
        title: "Analytics",
        description: "Track messages, delivery and replies.",
        blocks: [
          p("Analytics shows numbers for the WhatsApp number of your open workspace. Pick a preset time range or your own dates."),
          list(
            "Totals for sent, delivered, read, failed and received messages",
            "Delivery, read and reply rates, compared with the previous period",
            "Messages over time, and a heatmap of busy days and hours",
            "Your message mix and top campaigns",
          ),
          p("Use Export to download the numbers as Excel or CSV. Days and hours are in India time."),
        ],
      },
    ],
  },
  {
    title: "Team and workspace",
    pages: [
      {
        slug: "team-roles",
        title: "Team and roles",
        description: "Invite people and control what they can do.",
        blocks: [
          h2("Invite someone"),
          steps(
            "In Settings, open the Team tab and invite them with their email and a role.",
            "They get an invitation email. The link works for 24 hours.",
            "They sign in with the invited email and accept.",
          ),
          h2("Roles"),
          list(
            "Owner: full access, including billing.",
            "Team Lead: manages their own team and its chats.",
            "Team Member All Chats: sees and replies to all chats.",
            "Team Member Assigned Only: sees and replies to chats assigned to them.",
            "Viewer: can look at everything but change nothing.",
          ),
          p("You can create custom roles in the Roles & Permissions tab, and turn individual permissions on or off for one person. Every page stays visible, and an action someone isn't allowed to do shows a message."),
          note("A workspace always keeps at least one Owner, and nobody can change their own role or permissions."),
        ],
      },
      {
        slug: "workspaces",
        title: "Workspaces and storage",
        description: "Run separate businesses and manage your storage.",
        blocks: [
          p("Each workspace is fully separate, with its own number, team, data and billing. Open Projects to see yours and use the switcher to move between them."),
          h2("Delete a workspace"),
          p("Only an Owner can delete a workspace. You can't delete your last workspace, or one with billing history. For those, contact support."),
          h2("Cloud Storage"),
          p("Cloud Storage shows what your workspace uses. To free up space, you can remove old media, old messages, unsubscribed contacts or single files. If storage is full, your files stay safe, but new uploads are blocked until you free up space or add more."),
        ],
      },
      {
        slug: "notifications",
        title: "Notifications",
        description: "Choose what you hear about.",
        blocks: [
          p("Notifications appear under the bell at the top, as pop-ups and by email for important events. You're told about things like new messages, assigned chats, broadcasts, template changes and billing."),
          p("In Settings, open the Notifications tab to choose what you get, including email. Payment receipts are always emailed."),
        ],
      },
    ],
  },
  {
    title: "Developers",
    pages: [
      {
        slug: "api-webhooks",
        title: "API and webhooks",
        description: "Connect Chatlyn to your own systems.",
        blocks: [
          p("Open Developers to create API keys and webhooks and see your request logs. What you can use depends on your plan."),
          h2("API keys"),
          p("Send your key as a Bearer token in the Authorization header. A key is shown only once, so store it safely. Regenerating a key stops the old one immediately. You can also limit a key to certain IP addresses."),
          h2("Webhooks"),
          p("Chatlyn sends signed events to your https URL. The X-Chatlyn-Signature header lets you check that they came from Chatlyn. Respond with a 2xx status within 10 seconds, otherwise the event is retried 5 times. A webhook that keeps failing for a day is switched off, and Owners are emailed."),
          h2("API campaigns"),
          p("Create an API campaign in Broadcast (New Campaign > API Campaign), then send it to one number at a time with POST /v1/campaigns/{campaign_name}/send. Each send shows in the campaign's report in Chatlyn."),
          note("Full endpoint details are in the Developers page of your dashboard."),
        ],
      },
      {
        slug: "whatsapp-otp",
        title: "WhatsApp OTP (login codes)",
        description: "Sign your users in with a code sent on WhatsApp.",
        blocks: [
          p("Send your users a one-time password on WhatsApp instead of SMS, for logging in or signing up on your website or app. Chatlyn makes the code, sends it and checks it, so you never store codes yourself."),
          h2("1. Create an Authentication template"),
          steps(
            "Open Templates and click Create.",
            "Pick the Authentication category. Meta writes the text itself: \"123456 is your verification code.\"",
            "Choose Copy code (works everywhere), or One-tap autofill for your Android app (needs its package name and signature hash).",
            "Keep the security reminder on, set when the code expires (for example 10 minutes), and submit. Meta usually approves it within minutes.",
          ),
          h2("Why can't I write my own text?"),
          p("This is WhatsApp's rule, not Chatlyn's. For one-time passwords Meta writes the message itself, so that nobody can send fake or misleading code messages. No business can change it, here or in Meta's WhatsApp Manager."),
          list(
            "The message: \"123456 is your verification code.\" (fixed).",
            "Security line, on or off: \"For your security, do not share this code.\"",
            "Expiry line: \"This code expires in 10 minutes.\" (1 to 90 minutes).",
            "Button text, for example \"Copy code\" or \"Copy OTP\".",
            "Language: pick Hindi, Gujarati or another language and Meta shows its text in that language.",
            "Your brand shows anyway: the message comes from your business's WhatsApp name.",
          ),
          note("Meta only allows codes in Authentication templates. A code sent in a Utility or Marketing template, for example with your own welcome text, is against WhatsApp's rules: Meta rejects the template or moves it to Authentication, and misuse can get the template or your number restricted."),
          h2("2. Send the code"),
          p("When your user enters their WhatsApp number, your server calls POST /v1/otp/send with your API key and the number, for example {\"to\": \"+919876543210\"}. You can also set code_length (4 to 8 digits, default 6) and expires_in_minutes (1 to 30, default 10). The user gets the code on WhatsApp with a Copy code button."),
          note("Have more than one Authentication template, for example English and Hindi? Choose one with template_name (e.g. \"login_otp_hindi\") or with language (e.g. \"hi\" for the first approved one in Hindi). Without either, your oldest approved Authentication template is used."),
          h2("3. Check the code"),
          p("When the user types the code, your server calls POST /v1/otp/verify with the number and the code. Sign them in only if the answer has \"verified\": true. Each code works once."),
          h2("Login, sign-up, password reset and more"),
          p("One Authentication template covers every use: the message is the same, only what your app does after \"verified\": true changes. Tell Chatlyn what each code is for with purpose, in both calls:"),
          list(
            "login: signing in (the default if you leave purpose out).",
            "signup: verifying a new account's number.",
            "password_reset: forgot password or account recovery.",
            "two_factor: a second step after the password.",
            "confirm_action: before a payment, an address change or deleting an account.",
          ),
          p("A code only works for the purpose it was sent for, so a login code can't approve a password reset or a payment. Codes for different purposes don't cancel each other."),
          h2("Limits that keep it safe"),
          list(
            "A new code replaces the previous one for that number and purpose.",
            "One number can get a code every 30 seconds, and at most 5 codes an hour, whatever the purpose.",
            "After 5 wrong tries the code stops working; send a new one.",
            "Codes expire after the time you set.",
            "Chatlyn keeps only a scrambled (hashed) copy of each code.",
          ),
          h2("Good to know"),
          list(
            "Each code is a template message charged at the authentication rate.",
            "Customers who replied STOP to your broadcasts still get the login codes they ask for.",
            "To show when a code was delivered, or that it couldn't be (for example the number isn't on WhatsApp), add a webhook for message.status in Developers, and offer another way to log in.",
            "Call these from your server only, never from the app or the browser: your API key must stay secret.",
          ),
        ],
      },
    ],
  },
  {
    title: "Billing",
    pages: [
      {
        slug: "plans-billing",
        title: "Plans and billing",
        description: "Plans, credits, add-ons and invoices.",
        blocks: [
          p("Manage everything in Plans & Billing. Current prices and what each plan includes are on our pricing section."),
          h2("Credits"),
          p("Credits pay for template messages and outgoing calls. The cost of a template depends on its Meta category. Each month also includes free service messages, and after that they use credits too. If a message fails for certain Meta reasons, its credits come back automatically."),
          h2("Upgrade, renew or cancel"),
          list(
            "Upgrade: pay the price difference for the time left. The new plan starts now and your end date stays the same.",
            "Downgrade: not possible in the middle of a term.",
            "Renew: pay the full price and your validity is extended.",
            "Cancel: your plan and add-ons end now, and unused value is refunded as credits or to your bank.",
          ),
          h2("Add-ons"),
          p("Add-ons give you more seats, tags, attributes, storage and more. They're charged for the months left in your plan and end with it."),
          h2("Invoices"),
          p("Your first paid checkout asks for billing details, as a business with GSTIN or as a person. After each payment you get a receipt by email with the invoice PDF."),
          note("If you run out of credits or your account is blocked, broadcasts and template messages stop, but replies inside the 24-hour window keep working."),
        ],
      },
    ],
  },
  {
    title: "Help",
    pages: [
      {
        slug: "help-centre",
        title: "Get help",
        description: "Report a problem and follow your ticket.",
        blocks: [
          steps(
            "In your dashboard, click the round Help Centre button at the bottom right.",
            "Describe what went wrong. Attach a JPG or PNG screenshot under 5 MB, or paste one in.",
            "Click Submit. You get a ticket number.",
          ),
          p("Open My tickets in the same window to see the status. We'll email you when your ticket is solved. If your issue isn't technical, our team will contact you to sort it out."),
        ],
      },
    ],
  },
];

export const DOC_PAGES: DocPage[] = DOC_CATEGORIES.flatMap((category) => category.pages);

export function findDocPage(slug: string): DocPage | undefined {
  return DOC_PAGES.find((page) => page.slug === slug);
}
