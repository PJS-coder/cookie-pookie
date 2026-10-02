'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';

export default function Hero(){
  const video=useRef(null);
  const [format,setFormat]=useState(null);
  const [failed,setFailed]=useState(false);
  const requestedPause=useRef(false);
  useEffect(()=>{
    const mobile=window.matchMedia('(max-width: 680px)');
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    requestedPause.current=motion.matches;
    const resize=()=>{setFormat(mobile.matches?'mobile':'desktop');setFailed(false)};
    const preference=()=>{requestedPause.current=motion.matches;if(motion.matches)video.current?.pause();else video.current?.play().catch(()=>{})};
    resize();mobile.addEventListener('change',resize);motion.addEventListener('change',preference);
    const visibility=()=>{if(document.hidden)video.current?.pause();else if(!requestedPause.current)video.current?.play().catch(()=>{})};
    document.addEventListener('visibilitychange',visibility);
    return()=>{mobile.removeEventListener('change',resize);motion.removeEventListener('change',preference);document.removeEventListener('visibilitychange',visibility)};
  },[]);
  useEffect(()=>{if(format&&!requestedPause.current)video.current?.play().catch(()=>{})},[format]);
  return <section className="cinema-hero video-hero" aria-label="Discover CookiePookie">
    <div className="hero-video-media" aria-hidden="true">
      <picture><source media="(max-width: 680px)" srcSet="/videos/waffle-mobile.jpg"/><img src="/videos/waffle-desktop.jpg" alt="" fetchPriority="high"/></picture>
      {format&&!failed&&<video key={format} ref={video} src={`/videos/waffle-${format}.mp4`} poster={`/videos/waffle-${format}.jpg`} muted loop playsInline autoPlay={!requestedPause.current} preload="metadata" onError={()=>setFailed(true)}/>}
    </div>
    <div className="cinema-shade"/>
    <div className="cinema-copy"><div className="eyebrow">A LITTLE INDULGENCE. A LOT OF JOY.</div><h1><span>Give in to</span><em>the good stuff.</em></h1><p>Golden waffles. Melting chocolate. A little moment that’s all yours.</p><div className="actions"><Link className="btn pink" href="/menu/">Explore the menu</Link><Link className="btn glass" href="/stores/">Find your happy place</Link></div></div>
    <div className="cinema-bottom"><div className="slide-label"><strong>Belgian waffles. Pure happiness.</strong></div><a className="scroll-cue" href="#discover">SCROLL FOR SOMETHING SWEET<span>↓</span></a></div>
  </section>
}
