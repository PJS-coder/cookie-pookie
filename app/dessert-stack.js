import Link from 'next/link';
const categories=[
['Waffles','Belgian waffles','nutty-nutella-brownie','Crisp, golden waffles. All the chocolate you could wish for.'],
['Pancakes','Mini pancakes','nutella-pancake','Little bites, big cravings. Nutella, maple and more.'],
['Coffee','Coffee','iced-latte','Cold coffees, iced lattes and creamy frappés.'],
['Cookies','Soft baked cookies','choco-chunk-triple-pack','Soft centres. Chocolate chunks. Your next happy bite.'],

];
export default function DessertStack(){return <section id="discover" className="dessert-stack-section category-stack"><div className="stack-layout"><div className="stack-intro"><div className="eyebrow">EXPLORE OUR MENU</div><h2>Pick your<br/><em>sweet spot.</em></h2><p>Waffles, pancakes, coffee & cookies.<br/>Find whatever you’re craving.</p><nav className="category-quicklinks" aria-label="Explore menu categories">{categories.map(([id,title])=><Link key={id} href={'/menu/#'+encodeURIComponent(id)}>{title}</Link>)}</nav><span className="stack-invitation">Four ways to find your happy.</span></div><div className="stack-cards">{categories.map(([id,title,image,text],i)=><article className={'dessert-stack-card category-stack-card stack-card-'+i} key={id} style={{'--card-index':i}}><img src={'/assets/'+image+'.webp'} alt={title} loading="lazy"/><div className="stack-card-top"><span>THE COOKIEPOOKIE MENU</span><span>0{i+1} / 04</span></div><div className="stack-card-copy"><h3>{title}</h3><p>{text}</p><Link href={'/menu/#'+encodeURIComponent(id)}>Explore {title.toLowerCase()}</Link></div></article>)}</div></div></section>}
