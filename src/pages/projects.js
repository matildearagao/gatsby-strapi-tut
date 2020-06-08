import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout> 
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        description
        title
        url
        github
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
