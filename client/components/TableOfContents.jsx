import React from 'react'
import { tableOfContentsX } from './helpers/table_of_contents'


class TableOfContents extends React.Component {

    componentDidMount() {
		tableOfContentsX()
		console.log("fire")    
    }



render(){
	return (
		<>

<p><b>💁 Demo for table of contents with auto-filled text using <a href='https://www.w3.org/TR/shadow-dom/' target="_blank">HTML Slot</a>. <a href='#footer'>Credits &amp; more</a>.</b></p>	
<h1>Velociraptor</h1>

<div id='toc'>
	{/* Element get created here */}
</div>



<article>
	<p>Velociraptor (/vᵻˈlɒsᵻræptər/; meaning "swift seizer" in Latin) is a genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the later part of the Cretaceous Period. Two species are currently recognized, although others have been assigned in the past. The type species is V. mongoliensis; fossils of this species have been discovered in Mongolia. A second species, V. osmolskae, was named in 2008 for skull material from Inner Mongolia, China.</p>

	<h2 id='h-1' slot='h-1'>Description</h2>
	<p>Velociraptor was a mid-sized dromaeosaurid, with adults measuring up to 2.07 m (6.8 ft) long, 0.5 m (1.6 ft) high at the hip, and weighing up to 15 kg (33 lb). The skull, which grew up to 25 cm (10 in) long, was uniquely up-curved, concave on the upper surface and convex on the lower. The jaws were lined with 26–28 widely spaced teeth on each side, each more strongly serrated on the back edge than the front.</p>

	<h3 id='sh-1-1' slot='sh-1-1'>Feathers</h3>
	<p>Fossils of dromaeosaurids more primitive than Velociraptor are known to have had feathers covering their bodies and fully developed feathered wings. The fact that the ancestors of Velociraptor were feathered and possibly capable of flight had long suggested to paleontologists that Velociraptor bore feathers as well, since even flightless birds today retain most of their feathers. In September 2007, researchers found quill knobs on the forearm of a Velociraptor found in Mongolia. These bumps on bird wing bones show where feathers anchor, and their presence on Velociraptor indicate it too had feathers. According to paleontologist Alan Turner,</p>
	<blockquote>A lack of quill knobs does not necessarily mean that a dinosaur did not have feathers. Finding quill knobs on Velociraptor, though, means that it definitely had feathers. This is something we'd long suspected, but no one had been able to prove.</blockquote>
	<p>Co-author Mark Norell, Curator-in-Charge of fossil reptiles, amphibians and birds at the American Museum of Natural History, also weighed in on the discovery, saying:</p>
	< blockquote >The more that we learn about these animals the more we find that there is basically no difference between birds and their closely related dinosaur ancestors like velociraptor. Both have wishbones, brooded their nests, possess hollow bones, and were covered in feathers. If animals like velociraptor were alive today our first impression would be that they were just very unusual looking birds.</blockquote >

	<h2 id='h-2' slot='h-2'>History of discovery</h2>
	<p>During an American Museum of Natural History expedition to the Outer Mongolian Gobi Desert, on 11 August 1923 Peter Kaisen recovered the first Velociraptor fossil known to science: a crushed but complete skull, associated with one of the raptorial second toe claws (AMNH 6515). In 1924, museum president Henry Fairfield Osborn designated the skull and claw (which he assumed to come from the hand) as the type specimen of his new genus, Velociraptor. This name is derived from the Latin words velox ('swift') and raptor ('robber' or 'plunderer') and refers to the animal's cursorial nature and carnivorous diet. Osborn named the type species V. mongoliensis after its country of origin. Earlier that year, Osborn had mentioned the animal in a popular press article, under the name "Ovoraptor djadochtari" (not to be confused with the similarly named Oviraptor). However, because the name "Ovoraptor" was not published in a scientific journal or accompanied by a formal description, it is considered a nomen nudum ('naked name'), and the name Velociraptor retains priority.</p>

	<h2 id='h-3' slot='h-3'>Classification</h2>
	<p>Velociraptor is a member of the group Eudromaeosauria, a derived sub-group of the larger family Dromaeosauridae. It is often placed within its own "subfamily", Velociraptorinae. In phylogenetic taxonomy, Velociraptorinae is usually defined as "all dromaeosaurs more closely related to Velociraptor than to Dromaeosaurus." However, dromaeosaurid classification is highly variable. Originally, the subfamily Velociraptorinae was erected solely to contain Velociraptor. Other analyses have often included other genera, usually Deinonychus and Saurornitholestes, and more recently Tsaagan. However, several studies published during the 2010s, including expanded versions of the analyses that found support for Velociraptorinae, have failed to resolve it as a distinct group, but rather have suggested it is a paraphyletic grade which gave rise to the Dromaeosaurinae.</p>

	<h2 id='h-4' slot='h-4'>Paleobiology</h2>
	<p>The "Fighting Dinosaurs" specimen, found in 1971, preserves a Velociraptor mongoliensis and Protoceratops andrewsi in combat and provides direct evidence of predatory behavior. When originally reported, it was hypothesized that the two animals drowned. However, as the animals were preserved in ancient sand dune deposits, it is now thought that the animals were buried in sand, either from a collapsing dune or in a sandstorm. Burial must have been extremely fast, judging from the lifelike poses in which the animals were preserved. Parts of the Protoceratops are missing, which has been seen as evidence of scavenging by other animals. Comparisons between the scleral rings of Velociraptor, Protoceratops, and modern birds and reptiles indicates that Velociraptor may have been nocturnal, while Protoceratops may have been cathemeral, active throughout the day during short intervals, suggesting that the fight may have occurred at twilight or during low-light conditions.</p>

	<h3 id='sh-4-1' slot='sh-4-1'>Scavenging behavior</h3>
	<p>In 2010, Hone and colleagues published a paper on their 2008 discovery of shed teeth of what they believed to be a Velociraptor near a tooth-marked jaw bone of what they believed to be a Protoceratops in the Bayan Mandahu Formation. The authors concluded that the find represented "late-stage carcass consumption by Velociraptor" as the predator would have eaten other parts of a freshly killed Protoceratops before biting in the jaw area. The evidence was seen as supporting the inference from the "Fighting Dinosaurs" fossil that Protoceratops was part of the diet of Velociraptor. In 2012, Hone and colleagues published a paper that described a Velociraptor specimen with a long bone of an azhdarchid pterosaur in its gut. This was interpreted as showing scavenging behaviour.</p>

	<h3 id='sh-4-2' slot='sh-4-2'>Metabolism</h3>
	<p>Velociraptor was warm-blooded to some degree, as it required a significant amount of energy to hunt. Modern animals that possess feathery or furry coats, like Velociraptor did, tend to be warm-blooded, since these coverings function as insulation. However, bone growth rates in dromaeosaurids and some early birds suggest a more moderate metabolism, compared with most modern warm-blooded mammals and birds. The kiwi is similar to dromaeosaurids in anatomy, feather type, bone structure and even the narrow anatomy of the nasal passages (usually a key indicator of metabolism). The kiwi is a highly active, if specialized, flightless bird, with a stable body temperature and a fairly low resting metabolic rate, making it a good model for the metabolism of primitive birds and dromaeosaurids.</p>

	<h3 id='sh-4-3' slot='sh-4-3'>Pathology</h3>
	<p>One Velociratoptor mongoliensis skull bears two parallel rows of small punctures that match the spacing and size of Velociraptor teeth. Scientists believe that the wound was likely inflicted by another Velociraptor during a fight. Further, because the fossil bone shows no sign of healing near the bite wounds, the injury probably killed it. Another specimen, found with the bones of an azhdarchid pterosaur within its stomach cavity, was carrying or recovering from an injury sustained to its ribs. From evidence on the pterosaur bones, which were devoid of pitting or deformations from digestion, the Velociraptor died shortly after, possibly from the earlier injury.</p>
</article>

<footer id='footer'>
	✰ <strong>Credit</strong>: <br /> Text derived from the Wikipedia article on Velociraptor.<br />
	✰ <strong>Github</strong>: <br /> <a href='https://github.com/hongkiat/html-slot-toc' target='_blank'>https://github.com/hongkiat/html-slot-toc</a><br />
	✰ <strong>Download</strong>: <br /> <a href='https://github.com/hongkiat/html-slot-toc/archive/master.zip' target='_blank'>https://github.com/hongkiat/html-slot-toc/archive/master.zip</a>
</footer>

<template>
	<ul>
		<li>
			<a href='#h-1'><slot name='h-1'></slot></a>
			<ul>
				<li><a href='#sh-1-1'><slot name='sh-1-1'></slot></a></li>
			</ul>
		</li>
		<li><a href='#h-2'><slot name='h-2'></slot></a></li>
		<li><a href='#h-3'><slot name='h-3'></slot></a></li>
		<li>
			<a href='#h-4'><slot name='h-4'></slot></a>
			<ul>
				<li><a href='#sh-4-1'><slot name='sh-4-1'></slot></a></li>
				<li><a href='#sh-4-2'><slot name='sh-4-2'></slot></a></li>
				<li><a href='#sh-4-3'><slot name='sh-4-3'></slot></a></li>
			</ul>
		</li>
	</ul>

</template>

		</>
	)
}
}


export default (TableOfContents)
