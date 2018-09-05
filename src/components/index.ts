import Vue, { VueConstructor } from 'vue'

// Columns
import Columns from './Columns/Columns/Columns.vue'
import Column from './Columns/Column/Column.vue'

// Layout
import Container from './Layout/Container/Container.vue'
import Level from './Layout/Level/Level.vue'
import LevelItem from './Layout/LevelItem/LevelItem.vue'
// import MediaObject from './Layout/MediaObject/MediaObject.vue'
import Hero from './Layout/Hero/Hero.vue'
import Section from './Layout/Section/Section.vue'
import Footer from './Layout/Footer/Footer.vue'
// import Tiles from './Layout/Tiles/Tiles.vue'

// Form
// import Form from './Form/Form/Form.vue'
// import Input from './Form/Input/Input.vue'
// import Textarea from './Form/Textarea/Textarea.vue'
// import Select from './Form/Select/Select.vue'
// import Checkbox from './Form/Checkbox/Checkbox.vue'
// import Radio from './Form/Radio/Radio.vue'
// import File from './Form/File/File.vue'
// import Datepicker from './Form/Datepicker/Datepicker.vue'

// Elements
import Box from './Elements/Box/Box.vue'
import Buttons from './Elements/Buttons/Buttons.vue'
import Button from './Elements/Button/Button.vue'
// import Content from './Elements/Content/Content.vue'
// import Delete from './Elements/Delete/Delete.vue'
import Icon from './Elements/Icon/Icon.vue'
import Image from './Elements/Image/Image.vue'
// import Notification from './Elements/Notification/Notification.vue'
// import Progress from './Elements/Progress/Progress.vue'
// import Table from './Elements/Table/Table.vue'
// import Tag from './Elements/Tag/Tag.vue'
// import Title from './Elements/Title/Title.vue'

// Components
// import Breadcrumb from './Components/Breadcrumb/Breadcrumb.vue'
// import Card from './Components/Card/Card.vue'
// import Dropdown from './Components/Dropdown/Dropdown.vue'
// import Menu from './Components/Menu/Menu.vue'
// import Message from './Components/Message/Message.vue'
// import Modal from './Components/Modal/Modal.vue'
// import Navbar from './Components/Navbar/Navbar.vue'
// import Pagination from './Components/Pagination/Pagination.vue'
// import Panel from './Components/Panel/Panel.vue'
// import Tabs from './Components/Tabs/Tabs.vue'

export default {
  // Columns
  Columns,
  Column,

  // Layout
  Container,
  Level,
  LevelItem,
  // MediaObject,
  Hero,
  Section,
  Footer,
  // Tiles,

  // Form
  // Form,
  // Input,
  // Textarea,
  // Select,
  // Checkbox,
  // Radio,
  // File,
  // Datepicker,

  // Elements
  Box,
  Buttons,
  Button,
  // Content,
  // Delete,
  Icon,
  Image,
  // Notification,
  // Progress,
  // Table,
  // Tag,
  // Title,

  // Components
  // Breadcrumb,
  // Card,
  // Dropdown,
  // Menu,
  // Message,
  // Modal,
  // Navbar,
  // Pagination,
  // Panel,
  // Tabs
} as {
  [key: string]: VueConstructor<Vue>
}
