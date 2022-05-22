<template>
  <div class="search">
    <div class="search-bar">
      <el-input
        v-model="inputedTitle"
        size="large" placeholder="input title to filter"
        clearable
      />
      <el-button
        size="large"
        type="primary"
        round
        @click="handleSearch"
      >Search</el-button>
    </div>
    <div class="search-list">
      <TransitionGroup name="list">
        <div class="search-tag" v-for="(item, tagIdx) in currentTestData" :key="item.title">
          <h2>{{ item.title }}</h2>
          <div>
            <el-button
              :icon="Plus"
              size="small"
              type="primary"
              @click="handleAddClick(tagIdx)"
              aria-label="add tag"
            />
            <el-tag
              v-for="tag in item.tags"
              :key="tag + tagIdx"
              @close="handleTagClose(tagIdx, tag)"
              closable
            >{{ tag }}</el-tag>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <el-dialog v-model="dialogFormVisible" title="Input the name of the tag you want to add">
      <el-input v-model="addingTag" placeholder="TagX" />
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleAddTag"
            >Add tags</el-button
          >
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue'
import { ElInput, ElButton, ElTag, ElDialog, ElNotification } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import Draggable from '../utils/Draggable'
import testJson from './test.json'
import { searchByTitle, closeTag, addTag } from '@/domain/search'
import { TagsItem } from '@/types/search'

const inputedTitle: Ref<string> = ref('')
const originTestData: Ref<TagsItem[]> = ref(testJson.data)
const currentTestData: Ref<TagsItem[]> = ref(testJson.data)

const handleSearch = () => {
  currentTestData.value = searchByTitle(originTestData.value, inputedTitle.value)
}

const handleTagClose = (index: number, tag: string) => {
  currentTestData.value[index].tags = closeTag(originTestData.value[index].tags, tag)
  ElNotification({
    title: 'Success',
    message: `Success removed the ${tag}`,
    type: 'success'
  })
}

// edit tag
const dialogFormVisible: Ref<boolean> = ref(false)
const addingTag: Ref<string> = ref('')
const clickedTagIdx: Ref<number> = ref(-1)

const handleAddClick = (tagIdx: number) => {
  clickedTagIdx.value = tagIdx
  dialogFormVisible.value = true
}

const handleAddTag = () => {
  const currentTag = currentTestData.value[clickedTagIdx.value]
  const res = addTag(currentTag.tags, addingTag.value)
  if (res.type === 'failed') {
    return ElNotification({
      title: 'Error',
      message: res.msg,
      type: 'error'
    })
  }
  currentTag.tags = res.tags
  if (res.type === 'success') {
    ElNotification({
      title: 'Success',
      message: res.msg,
      type: 'success'
    })
    dialogFormVisible.value = false
  }
}
// edit tag end

onMounted(() => {
  // eslint-disable-next-line no-new
  new Draggable({
    element: document.querySelector('.search-list')!,
    dragElementClassName: 'active',
    onChange: (e) => {
      const temp = currentTestData.value[e.beforeIdx]
      currentTestData.value[e.beforeIdx] = currentTestData.value[e.afterIdx]
      currentTestData.value[e.afterIdx] = temp
    }
    // cloneElementClassName: 'clone-column-item'
  })
})
</script>

<style lang="scss">
.search {
  margin: 0 15vw;

  .search-bar {
    display: flex;

    .el-button {
      flex: 0 0 auto;
      margin-left: 2%;
    }
  }
}

.search-tag {
  background: white;
  margin-top: 20px;
  border: 1px solid var(--el-border-color);
  padding: 16px 10vw 12px;

  h2 {
    margin-bottom: 10px;
  }

  .el-tag {
    margin-right: 10px;
    margin-top: 10px;
  }

  .el-button {
    margin-right: 10px;
  }
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.active {
  cursor: move;
  background: #eaf2f9;
  opacity: 0.8;
}
</style>
