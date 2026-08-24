(() => {
  const replace = new Map([
    ['Leader, Author and Speaker', 'Creator · Education'],
    ['ABOUT MALCOM', 'ABOUT MASON'],
    ['Hi, I’m Malcom.', 'Hi, I’m Mason.'],
    ['Malcom X', 'Mason Reed'],
    ['Let’s Work Together', 'Read the Newsletter'],
    ['See What I Do', 'Explore the Work'],
    ['3K+ Clients', 'Weekly ideas'],
    ['Keynote Speaking', 'Speaking & Media'],
    ['Leadership Coaching', 'The Independent System'],
    ['Strategic Advisory', 'Select Advisory'],
    ['Workshops & Programs', 'Creator Workshops'],
    ['Latest Thoughts', 'Latest Ideas'],
    ['Books & Resources', 'Resources & Guides'],
    ['The Clarity Advantage', 'The Independent System'],
    ['The Better Questions Guide', 'The Weekly Reset'],
    ['Lead With Intention', 'Make Work That Lasts'],
    ['$99 on Amazon', 'Explore the guide'],
    ['Free Download ', 'Read the guide '],
    ['Words from people I’ve worked with', 'Notes for independent work'],
    ['Real experiences from leaders, founders, & individuals who found new clarity & momentum through my work.', 'Practical perspectives on building a thoughtful body of work.'],
    ['What’s Coming Up', 'Speaking & Media'],
    ['Frequently asked questions', 'Good questions'],
    ['Ideas worth exploring', 'Ideas worth exploring'],
    ['Malcom’s work', 'Mason’s work'],
    ['Malcom works', 'Mason works'],
    ['working with Malcom', 'working with Mason'],
    ['Malcom speaks', 'Mason speaks'],
  ]);
  const replaceText = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = []; let node;
    while (node = walker.nextNode()) nodes.push(node);
    nodes.forEach(n => {
      let value = n.nodeValue;
      replace.forEach((to, from) => { value = value.replaceAll(from, to); });
      value = value.replaceAll('I help ambitious people think clearly, lead boldly and create meaningful change through every stage of life', 'Ideas, tools and practical systems for doing meaningful work and building independently.');
      value = value.replaceAll('TRUSTED PUBLIC VOICE', 'CREATOR · EDUCATION');
      value = value.replaceAll('Ideas & perspectives shaping Mason’s work.', 'Ideas and practical systems for independent work.');
      value = value.replaceAll('Practicalguidance,strategicthinking&powerfulconversationsdesignedtohelpyoumoveforward.', 'Practical ideas, useful systems & thoughtful conversations for doing better work.');
      value = value.replaceAll('Explore Malcom’s books, guides & practical resources for clearer thinking, leadership & meaningful growth.', 'Explore Mason’s guides, systems and practical resources for clearer work and independent growth.');
      value = value.replaceAll('I help ambitious people find clarity, lead with purpose & make next chapter count', 'I help creators build better systems, make useful work & grow independently.');
      value = value.replaceAll('Over the years, I’ve worked with leaders, founders, and people in transition who know they’re capable of more but need space to think differently. My work brings together thoughtful conversation, practical strategy & belief in meaningful progress.', 'Through writing, video and focused teaching, I share practical ways to think more clearly, work with intention and build independently.');
      value = value.replaceAll('Through coaching, speaking, writing, and advisory work, I help turn big questions into clearer perspectives, stronger decisions, and meaningful action.', 'The work spans a weekly newsletter, course material, media conversations and a limited number of advisory engagements.');
      value = value.replaceAll('Thoughts & practical perspectives on leadership, purpose, growth & the choices that shape how we live & work.', 'Thoughts and practical perspectives on systems, creativity and independent work.');
      value = value.replaceAll('Malcom has a rare ability to make complicated ideas feel simple without ever making them feel simplistic. I left every conversation with something useful.', 'A useful idea should make the next decision clearer.');
      value = value.replaceAll('His keynote gave our team a new language for talking about leadership, change, and what it really means to move forward together.', 'Good systems create room for better thinking.');
      value = value.replaceAll('Malcom helped me step back from the noise, see what actually mattered, and make decisions I had been avoiding for months.', 'Clarity comes from choosing what matters most.');
      value = value.replaceAll('Malcom challenged the way I was thinking without ever telling me what to think. That shift gave me the confidence to take the next step.', 'Independent work is built one deliberate step at a time.');
      value = value.replaceAll('I came in with a lot of questions and left with a completely different perspective. The conversation changed how I approached my next chapter.', 'Better questions create better work.');
      value = value.replaceAll('What stood out was how genuinely present Malcom was. He listened carefully, asked better questions, and helped me find answers I already had within me.', 'Make space for the ideas that are worth keeping.');
      value = value.replace(/Angela Brooks|Daniel Carter|Jake Shields|Enzo Bennett|Marcus Reed|Priti Shah/g, 'Field note');
      value = value.replace(/Creative Director|Managing Director|Marketing Director|Author & Speaker|Executive Advisor|Entrepreneur/g, 'Independent work');
      value = value.replace(/Malcom/gi, 'Mason');
      value = value.replace(/Leader,\s*Author and Speaker/gi, 'Creator · Education');
      value = value.replaceAll('Leader, Author', 'BUILD BETTER SYSTEMS.');
      value = value.replaceAll('and Speaker', 'DO BETTER WORK.');
      value = value.replaceAll('CREATOR · EDUCATION', 'MASON REED · CREATOR EDUCATION');
      n.nodeValue = value;
    });
    document.querySelectorAll('a').forEach(a => {
      const text = a.textContent.trim();
      if (/Amazon|Download|Let’s Work Together|See What I Do/.test(text)) a.href = '/#resources';
    });
  };
  const setMeta = () => {
    document.title = 'Mason Reed — Creator & Education';
    const content = 'Practical ideas, tools and systems for doing meaningful work and building independently.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', content);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Mason Reed — Creator & Education');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', content);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Mason Reed — Creator & Education');
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', content);
  };
  const finishFooter = () => {
    document.querySelectorAll('a').forEach(a => {
      const text = a.textContent.trim();
      if (['YouTube', 'Instagram', 'Twitter', 'DM on X', 'Email Me', 'Book a Call'].includes(text)) a.style.display = 'none';
      if (text === 'Made by Flux') { a.textContent = 'A WebCanBe project'; a.href = 'https://webcanbe.com'; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    });
    document.querySelectorAll('*').forEach(el => { if (el.children.length === 0 && el.textContent.trim() === 'Socials') el.style.display = 'none'; });
    document.querySelectorAll('*').forEach(el => { if (el.children.length === 0 && el.textContent.trim() === 'Made by Flux') el.style.display = 'none'; });
    if (!document.getElementById('mason-portfolio-note')) {
      const credit = document.createElement('p');
      credit.style.cssText = 'margin:28px auto 0;text-align:center;font:12px Arial,sans-serif;';
      const link = document.createElement('a');
      link.href = 'https://webcanbe.com'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'A WebCanBe project';
      credit.append(link); document.body.append(credit);
      const note = document.createElement('p');
      note.id = 'mason-portfolio-note';
      note.textContent = 'Due to contractual restrictions, the original work cannot be displayed publicly. The copyright and publication rights remain with the employer, so an unrelated demonstration site is presented here instead.';
      note.style.cssText = 'max-width:720px;margin:28px auto 0;padding:0 20px 28px;font:11px/1.55 Arial,sans-serif;color:rgba(255,255,255,.6);text-align:center;';
      document.body.append(note);
    }
  };
  const run = () => { setMeta(); replaceText(); finishFooter(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { setTimeout(run, 150); setTimeout(run, 1200); setTimeout(run, 2600); }); else { setTimeout(run, 150); setTimeout(run, 1200); setTimeout(run, 2600); }
})();
