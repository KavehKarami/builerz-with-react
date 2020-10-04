import React from 'react';
import Form from '../shared/Form';
import Input from '../shared/Input';
import RecentPost from './RecentPost';
import SidebarWidget from './SidebarWidget';
import TabPost from './TabPost';
import TagWidget from './TagWidget';
import WidgetCategory from './WidgetCategory';
import WidgetImage from './WidgetImage';

const SingleSidebar = () => {
  return (
    <div className="sidebar">

      <SidebarWidget>
        <div className="search-widget">
          <Form btnText={<i className="fa fa-search"></i>}>
            <Input placeholder="Search Keyword" />
          </Form>
        </div>
      </SidebarWidget>

      <SidebarWidget text="Recent Post">
        <RecentPost />
      </SidebarWidget>

      <SidebarWidget>
        <WidgetImage imgURL={require("../../../assets/img/blog-1.jpg")} />
      </SidebarWidget>

      <SidebarWidget>
        <TabPost />
      </SidebarWidget>

      <SidebarWidget>
        <WidgetImage imgURL={require("../../../assets/img/blog-2.jpg")} />
      </SidebarWidget>


      <SidebarWidget text="Categories">
        <WidgetCategory />
      </SidebarWidget>



      <SidebarWidget>
        <WidgetImage imgURL={require("../../../assets/img/blog-3.jpg")} />
      </SidebarWidget>

      <SidebarWidget text="Tags Cloud">
        <TagWidget />
      </SidebarWidget>

      <SidebarWidget text="Text Widget">
        <div className="text-widget">
          <p>
            Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea nec eros. Nunc eu enim non turpis id augue.
          </p>
        </div>
      </SidebarWidget>

    </div>
  );
}

export default SingleSidebar;