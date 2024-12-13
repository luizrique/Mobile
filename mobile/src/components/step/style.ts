import { StyleSheet } from "react-native";

import {colors, fontFamily} from '@/styles/theme'

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        gap: 16,
    },
    details: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600]
    },
    description: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray[500],
        marginTop: 4
    }
})