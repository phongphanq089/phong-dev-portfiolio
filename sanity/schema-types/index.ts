import { categoryType } from "./documents/category"
import { groupType } from "./documents/group"
import { postType } from "./documents/post"
import { resourceType } from "./documents/resource"
import { resourceCategoryType } from "./documents/resourceCategory"
import { tagType } from "./documents/tag"
import { blockContentType } from "./objects/blockContent"
import { calloutType } from "./objects/callout"

export const schemaTypes = [
  // Documents
  postType,
  categoryType,
  groupType,
  tagType,
  resourceType,
  resourceCategoryType,

  // Objects
  blockContentType,
  calloutType,
]

export {
  blockContentType,
  calloutType,
  categoryType,
  groupType,
  postType,
  resourceCategoryType,
  resourceType,
  tagType,
}
