import React from "react";
import { Sidebar } from "../../components/Sidebar/index";
import styled from "styled-components";

export function Home() {
  return (
    <MainContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        <DashboardHeader>Admin Dashboard</DashboardHeader>
        <StatsContainer>
          <StatCard>
            <h3>Users</h3>
            <p>120</p>
          </StatCard>
          <StatCard>
            <h3>Projects</h3>
            <p>15</p>
          </StatCard>
          <StatCard>
            <h3>Blogs</h3>
            <p>5</p>
          </StatCard>
          <StatCard>
            <h3>Skills</h3>
            <p>20</p>
          </StatCard>
        </StatsContainer>
        <RecentActivities>
          <h3>Recent Activities</h3>
          <ul>
            <li>User John Doe updated his profile</li>
            <li>New project "Website Redesign" created</li>
            <li>Blog post "React Tips" published</li>
            <li>User Jane Smith added new skill "GraphQL"</li>
          </ul>
        </RecentActivities>
      </ContentWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SidebarWrapper = styled.div`
  flex: 0 0 250px; /* Fixed width for the sidebar */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Take the remaining space */
  padding: 20px;
`;

const DashboardHeader = styled.h1`
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
`;

const RecentActivities = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default Home;
