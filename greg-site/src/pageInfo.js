import alamo from './images/alamo.jpg';
import gavel from './images/gavel.jpg';
import suburbs from './images/suburbs.jpg';
import family from './images/family.jpg';
import will from './images/will.jpg';

const pages = {
  main: {
    id: 0,
    title: 'Home',
    imgText: `Strong Advocacy. Personalized Service. Real Solutions.`,
    img: alamo,
    subtitle:
      'Seeking justice for individuals and small businesses in San Antonio',
    smallText:
      'No matter what your legal problem may be, you need an attorney who is willing and able to go the distance. As your personal counsel, in negotiations with your adversary or by aggressively litigating your case, your lawyer must fight to deliver the best possible results.',
    features: [
      {
        id: '0a',
        title: 'Real Property',
        text: 'Real estate and property disputes can happen for any given number of reasons. Whether due to property liens, unclear descriptions of deeds, or even property lines, real estate matters tend to escalate rather quickly. When there is significant value to a piece of land being fought over, this can also makes the stakes all the higher.',
      },
      {
        id: '0b',
        title: 'Family Law',
        text: 'There are few legal matters as distressing as family law issues. Futures are dashed, emotions are volatile, and children are often involved. The stakes are high and can often cloud the judgment and behavior of those involved, which is why it is essential to ensure you trust the attorney you hire. Rest-assured that in hiring our firm, you will have a team working for you that genuinely cares about your well-being and helping your obtain the most favorable outcomes possible.',
      },
      {
        id: '0c',
        title: 'Wills & Estates',
        text: 'It is not uncommon for people to question whether or not they need a will. If you are single, or even married, with no children and limited assets, the answer is likely no. Your assets may pass via intestate succession.  If you have children, you should get a will for the primary purpose of establishing who will become the guardian of your children at your death.',
      },
      {
        id: '0d',
        title: 'Bird Law',
        text: 'The Migratory Bird Treaty Act of 1918 (MBTA), codified at 16 U.S.C. §§ 703–712 (although §709 is omitted), is a United States federal law, first enacted in 1918 to implement the convention for the protection of migratory birds between the United States and Canada. The statute makes it unlawful without a waiver to pursue, hunt, take, capture, kill, or sell nearly 1,100 species of birds listed therein as migratory birds. The statute does not discriminate between live or dead birds and also grants full protection to any bird parts including feathers, eggs, and nests.',
      },
    ],
  },
  about: {
    id: 1,
    title: 'About',
    imgText: 'This is some stuff about Greg',
    img: gavel,
  },
  familyLaw: {
    id: 2,
    title: 'Family Law',
    imgText:
      'Mr. Lienhard is prepared to work compassionately with you on all aspects of law pertaining to your family and their well-being',
    img: family,
    subtitle: 'Greg will save your family',
    smallText: `I mean, you'd like to get custody but it's really not a big deal`,
    features: [
      {
        id: '2a',
        title: 'Why you need me',
        text: 'Family law focuses on many aspects dealing with family matters and domestic relationships. Issues may include:        •divorce •child custody •adoption These can be stressful events in your life and you need a lawyer who will listen attentively to your story and know your interests are being represented.',
      },
      {
        id: '2b',
        title: 'Why you really, really need me',
        text: `Divorce can involve marital property, alimony, child custody and more. Having a trusted legal professional by your side can help you be sure you are properly represented and protected during any legal procedings.`,
      },
      {
        id: '2c',
        title: 'Hire me before shit hits the fan',
        text: `An experienced attorney will be skilled in dividing any property equitably, determining spousal support and presenting a plan for child custody and support.  Although adoption can be a happy time for all involved, the process can be complex. It's important to consult with a family law attorney who will be able to negotiate all the laws and variances involved assuring that
        your experience is free from unnecessary anxiety.`,
      },
    ],
  },
  wills: {
    id: 3,
    title: 'Wills & Estates',
    imgText: `150,000 people die each day, do you have a plan?`,
    img: will,
    subtitle: 'Vending machines kill about 13 people a year.',
    smallText: `Mistakes on a doctor's note, mainly due to messy handwriting, kill over 7,000 people in the U.S. each year`,
    features: [
      {
        id: '3a',
        title: `Don't go fishing!`,
        text: `Although fishing is usually associated with a relaxing day off from work, those who do it for a living are more like to die on the job than pilots, roofers, utility workers, or even cops. For years, it was the most dangerous job on the Bureau of Labor's list, before fatal accidents pushed logging into the top spot. But people also get hurt in weird and wacky ways in less dangerous occupations.`,
      },
      {
        id: '3b',
        title: `Also, don't be left handed`,
        text: 'Being left-handed may increase your odds of getting hurt even more. According to a study in the New England Journal of Medicine left-handers are five times more likely to die in an accident than a right-hander, but politics may be a good choice. Since 1974, four of the seven presidents have been left-handed: Gerald Ford, George H.W. Bush, Bill Clinton and Barack Obama.',
      },
    ],
  },
  property: {
    id: 4,
    title: 'Real Property',
    imgText: 'Real property text goes here',
    img: suburbs,
    subtitle: 'Getting some property yo',
    smallText: 'yeah, real property stuff.  do you like real property?',
    features: [
      {
        id: '4a',
        title: 'Winning',
        text: 'Real estate and property disputes can happen for any given number of reasons. Whether due to property liens, unclear descriptions of deeds, or even property lines, real estate matters tend to escalate rather quickly. When there is significant value to a piece of land being fought over, this can also makes the stakes all the higher.',
      },
      {
        id: '4b',
        title: 'Winning Harder',
        text: 'Really not creative enough to come up with a lot of things',
      },
    ],
  },
};
export { pages };
