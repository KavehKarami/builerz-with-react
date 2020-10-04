import React from 'react';
import Accordion from './accordion/Accordion';
import AccordionItem from './accordion/AccordionItem';

const Faq = () => {
  return (
    <div className="faqs">
      <div className="container">
        <div className="section-header text-center">
          <p>Frequently Asked Question</p>
          <h2>You May Ask</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Accordion parentId="accordion-1" >
              <AccordionItem parentId={"accordion-1"} dataWowDelay="0.1s" uniqueId="collapseOne" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-1"} dataWowDelay="0.2s" uniqueId="collapseTwo" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-1"} dataWowDelay="0.3s" uniqueId="collapseThree" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-1"} dataWowDelay="0.4s" uniqueId="collapseFour" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-1"} dataWowDelay="0.5s" uniqueId="collapseFive" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
            </Accordion>
          </div>

          <div className="col-md-6">
            <Accordion parentId="accordion-2" >
              <AccordionItem parentId={"accordion-2"} dataWowDelay="0.1s" uniqueId="collapseSix" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-2"} dataWowDelay="0.2s" uniqueId="collapseSeven" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-2"} dataWowDelay="0.3s" uniqueId="collapseEight" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-2"} dataWowDelay="0.4s" uniqueId="collapseNine" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
              <AccordionItem parentId={"accordion-2"} dataWowDelay="0.5s" uniqueId="collapseTen" title="Lorem ipsum dolor sit amet?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non." />
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;