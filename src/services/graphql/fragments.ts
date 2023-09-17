import { gql } from "@apollo/client"

export const RECIPE_GQL_FRAGMENT = gql`
fragment BaseRecipe on Recipe {
    id
    isMembersOnly
    title
    description
    rating
    modifiedAt
    slug
    time {
      preparation
      cook
    }
    difficulty {
      rating
      value
    }
    images {
      hz
      vt
      brightness
    }
    tags {
      id
      type
      title
    }
    servings {
      default
      allowed
    }
    strictness {
      rating
      value
    }
    instructionSections {
        title
        header {
          text
        }
        footer {
          text
        }
        steps
    }
    tips {
     header
     content
    }
    videos {
       id
       type
    }
  }
`

export const TAG_GQL_FRAGMENT = gql`
fragment BaseTag on Tag {
    id
    title
    type
}
`

export const MEALPLAN_GQL_FRAGMENT = gql`
fragment MealPlanFragment on MealplanContent {
  id
  title
  description
  isMembersOnly
  image {
    hz
    vt
  }
}
`


