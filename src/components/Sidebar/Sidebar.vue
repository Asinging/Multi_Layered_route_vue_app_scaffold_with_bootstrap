<template>
	<v-navigation-drawer
		app
		clipped
		v-model="DRAWER_STATE"
		:mini-variant="!DRAWER_STATE"
		:width="sidebarWidth"
		:permanent="$vuetify.breakpoint.lgAndUp"
		:temporary="$vuetify.breakpoint.mdAndDown"
		:mini-variant-width="sidebarMinWidth"
		:class="{ 'drawer-mini': !DRAWER_STATE }"
	>
		<v-list shaped>
			<template v-for="(item, i) in sideBarFullItems">
				<v-row v-if="item.heading" :key="item.heading" align="center">
					<v-col cols="6" class="py-2">
						<span
							style="padding-left: 32px"
							class="text-body-1 subheader"
							:class="item.heading && DRAWER_STATE ? 'show ' : 'hide'"
						>
							{{ item.heading }}
						</span>
					</v-col>
					<v-col cols="6" class="text-center"> </v-col>
				</v-row>
				<v-divider
					v-else-if="item.divider"
					:key="i"
					dark
					class="my-1"
				></v-divider>
				<v-list-group
					color="indigo"
					v-else-if="item.children && DRAWER_STATE"
					:key="item.title"
					v-model="item.model"
					append-icon="mdi-chevron-down"
				>
					<template v-slot:prependIcon>
						<v-icon size="15" :color="item.iconColor" class="mx-0 px-0">{{
							item.icon
						}}</v-icon>
					</template>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title
								:title="item.title"
								class="black--text my-1 text-h4 px-0 mx-0"
							>
								{{ item.title }}
							</v-list-item-title>
						</v-list-item-content>
					</template>
					<v-list-item
						v-for="(child, i) in item.children"
						:key="i"
						:to="child.link"
						link
						@click="listItem(child.title)"
					>
						<v-list-item-action v-if="child.icon">
							<v-icon size="10" :color="child.iconColor" class="mx-0 px-0">{{
								child.icon
							}}</v-icon>
						</v-list-item-action>
						<v-tooltip
							content-class="vue-tooltip text-subtitle-1"
							color="primary"
							bottom
						>
							<template v-slot:activator="{ on }">
								<v-list-item-content v-on="on" class="mx-0">
									<v-list-item-title
										class="gray--text my-0 py-0 text-h5 mx-0 px-0"
										:title="child.title"
									>
										{{ child.title }}
									</v-list-item-title>
								</v-list-item-content>
							</template>
							<span>{{ child.tooltipMessage }}</span>
						</v-tooltip>
					</v-list-item>
				</v-list-group>
				<v-list-item
					color="primary"
					v-else
					:key="item.text"
					:href="item.href ? item.href : null"
					:to="item.link === '#' ? null : item.link"
					link
					@click="listItem(item.title)"
				>
					<v-list-item-action>
						<v-icon size="15" :color="item.iconColor ? item.iconColor : ''">{{
							item.icon
						}}</v-icon>
					</v-list-item-action>
					<v-tooltip content-class=" text-subtitle-2" color="primary" bottom>
						<template v-slot:activator="{ on }">
							<v-list-item-content v-on="on">
								<v-list-item-title
									class="gray--text pa-0 text-h4 my-1"
									link
									:title="item.title"
								>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item-content>
						</template>
						<span>
							{{ item.tooltipMessage }}
						</span>
					</v-tooltip>
				</v-list-item>
			</template>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	props: {
		source: String,
		sideBaritems: Array,
	},
	data() {
		return {
			sidebarWidth: 280,
			sidebarMinWidth: 100,
		};
	},
	computed: {
		...mapState(["drawer"]),
		DRAWER_STATE: {
			get() {
				return this.drawer;
			},
			set(newValue) {
				if (newValue === this.drawer) return;
				this.TOGGLE_DRAWER();
			},
		},
		sideBarFullItems() {
			let items = this.sideBaritems;

			return items;
		},
	},
	methods: {
		...mapActions(["TOGGLE_DRAWER"]),
		listItem(e) {
			this.$store.dispatch("SIDEBAR_ITEM_CLICK", e);
			localStorage.setItem("SIDEBAR_ITEM_CLICK", e);
		},
	},
};
</script>

<style src="./Sidebar.scss" lang="scss"/>
