import { gql } from "@apollo/client"
import { MEALPLAN_GQL_FRAGMENT, RECIPE_GQL_FRAGMENT, TAG_GQL_FRAGMENT } from "./fragments"

export const GET_TAGS = gql`
${TAG_GQL_FRAGMENT}
query GetTags (
    $page: Int
    $pageSize: Int
  ){
    listTags
    (
      input: {
        page: $page,
        pageSize: $pageSize
      }
    )
    {
      tags {
        ...BaseTag
      }
      totalSize
      nextPage
    }
  }
`

export const GET_RECIPES = gql`
${RECIPE_GQL_FRAGMENT}
query GetRecipes(
    $page: Int,
    $pageSize: Int,
    $tagFilters: [String],
    $premiumOnly: Boolean,
    $includePremiumPreview: Boolean,
    $query: String
  ) {
    listRecipes(input: {
      page: $page
      pageSize: $pageSize
      tagFilters: $tagFilters,
      premiumOnly: $premiumOnly,
      includePremiumPreview: $includePremiumPreview,
      query: $query
    }) {
      recipes {
        ...BaseRecipe
      }
      totalSize
      nextPage
    }
  }
`

export const GET_MEALPLANS = gql`
${MEALPLAN_GQL_FRAGMENT}
query GetFreeMealPlans(
  $tagFilters: [String],
  $query: String
) {
  listMealplans(
    input: {
      query: $query
      tagFilters: $tagFilters,
    }
  ) {
    mealplans {
      ...MealPlanFragment
    }
  }
}
`



