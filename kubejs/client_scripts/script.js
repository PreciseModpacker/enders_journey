// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
		event.hide('@waystones'),
		event.hide('charm:kiln'),
		event.hide ('quark:backpack'),
		event.hide ('cataclysm:enderite_block'),
		event.hide ('cataclysm:witherite_block'),
		event.hide ('cataclysm:enderite_ingot'),
		event.hide ('cataclysm:witherite_ingot'),
		event.hide ('atmospheric:kousa_planks'),
		event.hide ('atmospheric:kousa_log'),
		event.hide ('atmospheric:grimwood_planks'),
		event.hide ('atmospheric:grimwood_log'),
		event.hide ('atmospheric:crustose_planks'),
		event.hide ('atmospheric:crustose_log'),
		event.hide ('atmospheric:crustose_wood'),
		event.hide ('atmospheric:crustose_path'),
		event.hide ('atmospheric:stripped_kousa_log'),
		event.hide ('atmospheric:stripped_grimwood_log'),
		event.hide ('atmospheric:stripped_kousa_wood'),
		event.hide ('atmospheric:stripped_grimwood'),
		event.hide ('atmospheric:kousa_wood'),
		event.hide ('atmospheric:grimwood'),
		event.hide ('atmospheric:kousa_slab'),
		event.hide ('atmospheric:grimwood_slab'),
		event.hide ('atmospheric:kousa_stairs'),
		event.hide ('atmospheric:grimwood_stairs'),
		event.hide ('atmospheric:ivory_travertine'),
		event.hide ('atmospheric:peach_travertine'),
		event.hide ('atmospheric:persimmon_travertine'),
		event.hide ('atmospheric:saffron_travertine'),
		event.hide ('atmospheric:chiseled_ivory_travertine'),
		event.hide ('atmospheric:chiseled_peach_travertine'),
		event.hide ('atmospheric:chiseled_persimmon_travertine'),
		event.hide ('atmospheric:chiseled_saffron_travertine'),
		event.hide ('atmospheric:cut_ivory_travertine'),
		event.hide ('atmospheric:cut_peach_travertine'),
		event.hide ('atmospheric:cut_persimmon_travertine'),
		event.hide ('atmospheric:cut_saffron_travertine'),
		event.hide ('atmospheric:ivory_travertine_stairs'),
		event.hide ('atmospheric:peach_travertine_stairs'),
		event.hide ('atmospheric:persimmon_travertine_stairs'),
		event.hide ('atmospheric:saffron_travertine_stairs'),
		event.hide ('atmospheric:ivory_travertine_slab'),
		event.hide ('atmospheric:peach_travertine_slab'),
		event.hide ('atmospheric:persimmon_travertine_slab'),
		event.hide ('atmospheric:saffron_travertine_slab'),
		event.hide ('atmospheric:ivory_travertine_vertical_slab'),
		event.hide ('atmospheric:peach_travertine_vertical_slab'),
		event.hide ('atmospheric:persimmon_travertine_vertical_slab'),
		event.hide ('atmospheric:saffron_travertine_vertical_slab'),
		event.hide ('atmospheric:vertical_kousa_planks'),
		event.hide ('atmospheric:kousa_vertical_slab'),
		event.hide ('atmospheric:kousa_bookshelf'),
		event.hide ('atmospheric:stripped_kousa_post'),
		event.hide ('atmospheric:kousa_post'),
		event.hide ('atmospheric:crustose'),
		event.hide ('atmospheric:vertical_grimwood_planks'),
		event.hide ('atmospheric:grimwood_vertical_slab'),
		event.hide ('atmospheric:grimwood_bookshelf'),
		event.hide ('atmospheric:stripped_grimwood_post'),
		event.hide ('atmospheric:grimwood_post'),
		event.hide ('atmospheric:kousa_sapling'),
		event.hide ('atmospheric:grimwood_sapling'),
		event.hide ('atmospheric:kousa_leaves'),
		event.hide ('atmospheric:grimwood_leaves'),
		event.hide ('atmospheric:kousa_fence'),
		event.hide ('atmospheric:grimwood_fence'),
		event.hide ('atmospheric:kousa_beehive'),
		event.hide ('atmospheric:grimwood_beehive'),
		event.hide ('atmospheric:ivory_travertine_wall'),
		event.hide ('atmospheric:peach_travertine_wall'),
		event.hide ('atmospheric:persimmon_travertine_wall'),
		event.hide ('atmospheric:saffron_travertine_wall'),
		event.hide ('atmospheric:kousa_sign'),
		event.hide ('atmospheric:kousa_ladder'),
		event.hide ('atmospheric:kousa_leaf_carpet'),
		event.hide ('atmospheric:kousa_hedge'),
		event.hide ('atmospheric:kousa_chest'),
		event.hide ('atmospheric:crustone_path'),
		event.hide ('atmospheric:grimwood_sign'),
		event.hide ('atmospheric:grimwood_ladder'),
		event.hide ('atmospheric:grimwood_leaf_carpet'),
		event.hide ('atmospheric:grimwood_hedge'),
		event.hide ('atmospheric:grimwood_chest'),
		event.hide ('atmospheric:kousa_pressure_plate'),
		event.hide ('atmospheric:grimwood_pressure_plate'),
		event.hide ('atmospheric:kousa_trapdoor'),
		event.hide ('atmospheric:grimwood_trapdoor'),
		event.hide ('atmospheric:kousa_fence_gate'),
		event.hide ('atmospheric:grimwood_fence_gate'),
		event.hide ('atmospheric:kousa_button'),
		event.hide ('atmospheric:grimwood_button'),
		event.hide ('atmospheric:kousa_door'),
		event.hide ('atmospheric:grimwood_door'),
		event.hide ('atmospheric:kousa_trapped_chest'),
		event.hide ('atmospheric:grimwood_trapped_chest'),
		event.hide ('atmospheric:kousa_boat'),
		event.hide ('atmospheric:grimwood_boat'),
		event.hide ('upgrade_aquatic:tongue_kelp_block'),
		event.hide ('upgrade_aquatic:thorny_kelp_block'),
		event.hide ('upgrade_aquatic:ochre_kelp_block'),
		event.hide ('upgrade_aquatic:polar_kelp_block'),
		event.hide ('upgrade_aquatic:tongue_kelpy_cobblestone'),
		event.hide ('upgrade_aquatic:thorny_kelpy_cobblestone'),
		event.hide ('upgrade_aquatic:ochre_kelpy_cobblestone'),
		event.hide ('upgrade_aquatic:polar_kelpy_cobblestone'),
		event.hide ('upgrade_aquatic:tongue_kelpy_cobblestone_stairs'),
		event.hide ('upgrade_aquatic:thorny_kelpy_cobblestone_stairs'),
		event.hide ('upgrade_aquatic:ochre_kelpy_cobblestone_stairs'),
		event.hide ('upgrade_aquatic:polar_kelpy_cobblestone_stairs'),
		event.hide ('upgrade_aquatic:tongue_kelpy_cobblestone_slab'),
		event.hide ('upgrade_aquatic:thorny_kelpy_cobblestone_slab'),
		event.hide ('upgrade_aquatic:ochre_kelpy_cobblestone_slab'),
		event.hide ('upgrade_aquatic:polar_kelpy_cobblestone_slab'),
		event.hide ('upgrade_aquatic:tongue_kelpy_stone_bricks'),
		event.hide ('upgrade_aquatic:thorny_kelpy_stone_bricks'),
		event.hide ('upgrade_aquatic:ochre_kelpy_stone_bricks'),
		event.hide ('upgrade_aquatic:polar_kelpy_stone_bricks'),
		event.hide ('upgrade_aquatic:tongue_kelpy_stone_brick_stairs'),
		event.hide ('upgrade_aquatic:thorny_kelpy_stone_brick_stairs'),
		event.hide ('upgrade_aquatic:ochre_kelpy_stone_brick_stairs'),
		event.hide ('upgrade_aquatic:polar_kelpy_stone_brick_stairs'),
		event.hide ('upgrade_aquatic:tongue_kelpy_stone_brick_slab'),
		event.hide ('upgrade_aquatic:thorny_kelpy_stone_brick_slab'),
		event.hide ('upgrade_aquatic:ochre_kelpy_stone_brick_slab'),
		event.hide ('upgrade_aquatic:polar_kelpy_stone_brick_slab'),
		event.hide ('upgrade_aquatic:tongue_kelpy_cobblestone_vertical_slab'),
		event.hide ('upgrade_aquatic:thorny_kelpy_cobblestone_vertical_slab'),
		event.hide ('upgrade_aquatic:ochre_kelpy_cobblestone_vertical_slab'),
		event.hide ('upgrade_aquatic:polar_kelpy_cobblestone_vertical_slab'),
		event.hide ('upgrade_aquatic:tongue_kelpy_stone_brick_vertical_slab'),
		event.hide ('upgrade_aquatic:thorny_kelpy_stone_brick_vertical_slab'),
		event.hide ('upgrade_aquatic:ochre_kelpy_stone_brick_vertical_slab'),
		event.hide ('upgrade_aquatic:polar_kelpy_stone_brick_vertical_slab'),
		event.hide ('upgrade_aquatic:pink_jelly_torch'),
		event.hide ('upgrade_aquatic:purple_jelly_torch'),
		event.hide ('upgrade_aquatic:blue_jelly_torch'),
		event.hide ('upgrade_aquatic:green_jelly_torch'),
		event.hide ('upgrade_aquatic:yellow_jelly_torch'),
		event.hide ('upgrade_aquatic:orange_jelly_torch'),
		event.hide ('upgrade_aquatic:red_jelly_torch'),
		event.hide ('upgrade_aquatic:white_jelly_torch'),
		event.hide ('upgrade_aquatic:tongue_kelpy_cobblestone_wall'),
		event.hide ('upgrade_aquatic:thorny_kelpy_cobblestone_wall'),
		event.hide ('upgrade_aquatic:ochre_kelpy_cobblestone_wall'),
		event.hide ('upgrade_aquatic:polar_kelpy_cobblestone_wall'),
		event.hide ('upgrade_aquatic:tongue_kelpy_stone_brick_wall'),
		event.hide ('upgrade_aquatic:thorny_kelpy_stone_brick_wall'),
		event.hide ('upgrade_aquatic:ochre_kelpy_stone_brick_wall'),
		event.hide ('upgrade_aquatic:polar_kelpy_stone_brick_wall'),
		event.hide ('upgrade_aquatic:tongue_kelp'),
		event.hide ('upgrade_aquatic:thorny_kelp'),
		event.hide ('upgrade_aquatic:ochre_kelp'),
		event.hide ('upgrade_aquatic:polar_kelp')

})

