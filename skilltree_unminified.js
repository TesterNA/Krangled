function _createForOfIteratorHelper(t, e) {
    var i = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!i) {
        if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || (e && t && "number" == typeof t.length)) {
            i && (t = i);
            var s = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
                },
                e: function (t) {
                    throw t;
                },
                f: a,
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var n,
        r = !0,
        o = !1;
    return {
        s: function () {
            i = i.call(t);
        },
        n: function () {
            var t = i.next();
            return (r = t.done), t;
        },
        e: function (t) {
            (o = !0), (n = t);
        },
        f: function () {
            try {
                r || null == i.return || i.return();
            } finally {
                if (o) throw n;
            }
        },
    };
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0;
    }
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _createForOfIteratorHelper(t, e) {
    var i = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!i) {
        if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || (e && t && "number" == typeof t.length)) {
            i && (t = i);
            var s = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
                },
                e: function (t) {
                    throw t;
                },
                f: a,
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var n,
        r = !0,
        o = !1;
    return {
        s: function () {
            i = i.call(t);
        },
        n: function () {
            var t = i.next();
            return (r = t.done), t;
        },
        e: function (t) {
            (o = !0), (n = t);
        },
        f: function () {
            try {
                r || null == i.return || i.return();
            } finally {
                if (o) throw n;
            }
        },
    };
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0;
    }
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
}
function _typeof(t) {
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
        _typeof(t)
    );
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
define("PoE/PassiveSkillTree/ObjectList", [], function () {
    return function () {
        (this.init = function () {
            (this.objects = []), (this.priorities = []), (this.priorityToObjects = {});
        }),
            (this.add = function (t, e) {
                (e = void 0 === e ? 0 : e),
                    void 0 === this.priorityToObjects[e] &&
                        (this.priorities.push(e),
                        (this.priorityToObjects[e] = []),
                        this.priorities.sort(function (t, e) {
                            return t - e;
                        })),
                    this.priorityToObjects[e].push(t);
            }),
            (this.remove = function (t) {
                var e = !1;
                for (var i in this.priorityToObjects) for (var s = this.priorityToObjects[i], a = s.length - 1; a >= 0; --a) s[a] === t && (s.splice(a, 1), (e = !0));
                return e;
            }),
            (this.foreachObject = function (t) {
                for (var e = 0, i = this.priorities.length; e < i; ++e) for (var s = this.priorityToObjects[this.priorities[e]], a = 0, n = s.length; a < n; ++a) t(s[a]);
            }),
            this.init();
    };
}),
    define("PoE/PassiveSkillTree/EventContainer", [], function () {
        return function (t) {
            (this.init = function (t) {
                (this.self = t), (this.events = []);
            }),
                (this.trigger = function () {
                    for (var t = 0, e = this.events.length; t < e; ++t) this.events[t].call(this.self);
                }),
                (this.add = function (t) {
                    if (t instanceof Array) for (var e = 0, i = t.length; e < i; ++e) this.add(t[e]);
                    else this.events.push(t);
                }),
                (this.remove = function (t) {
                    for (var e = 0; e < this.events.length; ++e) this.events[e] === t && this.events.splice(e, 1);
                }),
                this.init(t);
        };
    }),
    define("PoE/PassiveSkillTree/PassiveAllocation", [], function () {
        return function (t) {
            (this.init = function () {
                (this.skillTree = t),
                    (this.total = null),
                    (this.characterLevel = 100),
                    (this.extraSkillPoints = 24),
                    (this.skillPointsFromPassive = 0),
                    (this.ascendancySkillPoints = 8),
                    (this.numAllocatedAscendancySkills = 0),
                    (this.numAllocatedSkills = 0),
                    (this.allocatedSkills = {}),
                    (this.canAllocateSkills = {}),
                    (this.allocatedEffects = {}),
                    (this.allocatedExpansionSkills = {}),
                    (this.masteryCount = 0),
                    this.skillTree.points && (this.skillTree.points.totalPoints && (this.total = this.skillTree.points.totalPoints), this.skillTree.points.ascendancyPoints && (this.ascendancySkillPoints = 8));
            }),
                (this.foreachAllocatedSkill = function (t) {
                    for (var e in this.allocatedSkills) t(this.allocatedSkills[e]);
                }),
                (this.isAllocated = function (t) {
                    return void 0 !== this.allocatedSkills[t.skill.getHash()];
                }),
                (this.loadHashArray = function (t, e, i) {
                    this.reset();
                    var s,
                        a = _createForOfIteratorHelper(t);
                    try {
                        for (a.s(); !(s = a.n()).done; ) {
                            if (0 !== (o = s.value))
                                (l = this.skillTree.getNode(o))
                                    ? (l.isAscendancy ? l.isMultipleChoiceOption || this.numAllocatedAscendancySkills++ : l.isBlightedNode || this.numAllocatedSkills++,
                                      l.passivePointsGranted >= 0 && (this.skillPointsFromPassive += l.passivePointsGranted),
                                      (this.allocatedSkills[o] = l),
                                      l && ((l.active = !0), this.passiveAllocated(l.skill)))
                                    : console.log("Hash: " + o + " no longer exists in Passive Skill Tree.");
                        }
                    } catch (t) {
                        a.e(t);
                    } finally {
                        a.f();
                    }
                    var n,
                        r = _createForOfIteratorHelper(e);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var o = n.value;
                            this.numAllocatedSkills++, console.warn("Expansion jewel allocations are currently not supported."), (this.allocatedExpansionSkills[o] = {});
                        }
                    } catch (t) {
                        r.e(t);
                    } finally {
                        r.f();
                    }
                    for (var o in i) {
                        var l;
                        if (0 !== o)
                            if ((l = this.skillTree.getNode(o)) && l.isMastery() && l.masteryData) {
                                if (void 0 === this.allocatedSkills[o]) {
                                    console.warn("Got mastery data for an unallocated skill. Skipping...");
                                    continue;
                                }
                                var h = i[o];
                                l.masteryData.hasEffectId(h) && ((this.allocatedEffects[o] = h), (l.active = !0), this.passiveAllocated(l.skill));
                            }
                    }
                    this.recalcCanAllocateSkills(), this.skillTree.events.pointsChanged.trigger();
                }),
                (this.allocate = function (t, e) {
                    var i = this,
                        s = this.skillTree.getNode(t);
                    if (!this.canAllocate(s, e)) return !1;
                    if (s.isMultipleChoiceOption) {
                        var a = null;
                        if (
                            (s.foreachInNode(function (t) {
                                if (t.isMultipleChoice) return (a = t), !1;
                            }),
                            !a)
                        )
                            return !1;
                        a.foreachOutNode(function (t) {
                            t.isMultipleChoiceOption && i.unallocate(t.id);
                        });
                    }
                    return (
                        s.isMastery() && s.masteryData && e && s.masteryData.hasEffectId(e) && (this.allocatedEffects[t] = e),
                        s.isBlightedNode || s.isMultipleChoiceOption || (s.isAscendancy ? this.numAllocatedAscendancySkills++ : this.numAllocatedSkills++),
                        s.passivePointsGranted >= 0 && (this.skillPointsFromPassive += s.passivePointsGranted),
                        (s.active = !0),
                        (this.allocatedSkills[t] = s),
                        this.passiveAllocated(s.skill),
                        this.recalcCanAllocateSkills(),
                        this.skillTree.events.pointsChanged.trigger(),
                        this.skillTree.pushHistoryState(),
                        !0
                    );
                }),
                (this.unallocate = function (t) {
                    var e = this.skillTree.getNode(t);
                    return (
                        !!this.canUnallocate(e) &&
                        (e.isMastery() && e.masteryData && t in this.allocatedEffects && delete this.allocatedEffects[t],
                        e.isBlightedNode || e.isMultipleChoiceOption || (e.isAscendancy ? this.numAllocatedAscendancySkills-- : this.numAllocatedSkills--),
                        e.passivePointsGranted && (this.skillPointsFromPassive -= e.passivePointsGranted),
                        (e.active = !1),
                        delete this.allocatedSkills[t],
                        this.passiveUnallocated(e.skill),
                        this.recalcCanAllocateSkills(),
                        this.skillTree.events.pointsChanged.trigger(),
                        this.skillTree.pushHistoryState(),
                        !0)
                    );
                }),
                (this.canAllocate = function (t, e) {
                    var i = this;
                    if (this.skillTree.readonly) return !1;
                    if (t.active) return !1;
                    if (t === this.skillTree.startNode) return !1;
                    if (void 0 !== this.allocatedSkills[t.id]) return !1;
                    if (t.isAscendancyStartNode) return !1;
                    if (t.isBlightedNode) return !0;
                    if (t.isMastery() && (!t.masteryData || (e && !t.masteryData.hasEffectId(e)))) return !1;
                    if (t.isMultipleChoiceOption)
                        for (var s in t.inNodes) {
                            var a = t.inNodes[s];
                            if (!a.isMultipleChoiceOption && a.isMultipleChoice && a.active) return !0;
                        }
                    return (
                        !(!t.isAscendancy && this.getPassiveSkillPointsAvailable() <= 0) &&
                        !(t.isAscendancy && this.getAscendancyPassiveSkillPointsAvailable() <= 0) &&
                        !!t.findNeighbourNode(function (t) {
                            return !!(t.isClassStartPosition(i.skillTree.characterClass) || ("Atlas" === i.skillTree.tree && t === i.skillTree.startNode)) || (t.active && !t.isMastery());
                        })
                    );
                }),
                (this.canUnallocate = function (t) {
                    return (
                        !this.skillTree.readonly &&
                        !t.isClassStartNode() &&
                        !t.isAscendancyStartNode &&
                        (!!t.isBlightedNode ||
                            !(!t.isMastery() || !t.masteryData) ||
                            (!!this.isAllocatedLeaf(t) && !(t.passivePointsGranted && t.passivePointsGranted > 0 && this.getPassiveSkillPointsAvailable() - t.passivePointsGranted < 0)))
                    );
                }),
                (this.isAllocatedLeaf = function (t) {
                    if (!t.active) return !1;
                    if (this.isAffectedJewelNode(t)) return !0;
                    var e = [];
                    for (var i in (this.skillTree.visitNodes(this.skillTree.startNode, [], e, function (e, i) {
                        return i ? e !== t && e.active : null === e.skill || (e !== t && e.active);
                    }),
                    this.allocatedSkills)) {
                        var s = this.allocatedSkills[i];
                        if (!e[s.id]) {
                            if (!s.skill || s.id == t.id) continue;
                            if (this.isAffectedJewelNode(s)) continue;
                            return !1;
                        }
                    }
                    return !0;
                }),
                (this.isAffectedJewelNode = function (t) {
                    for (var e in this.skillTree.jewelSlots)
                        if (this.allocatedSkills[this.skillTree.jewelSlots[e]]) {
                            var i = this.allocatedSkills[this.skillTree.jewelSlots[e]];
                            if (i && i.skill && i.skill.radius) {
                                var s = this.skillTree.getNodePositionInfo(i, i.group).position,
                                    a = this.skillTree.getNodePositionInfo(t, t.group).position,
                                    n = Math.round(Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)));
                                if (!i.skill.radiusMin && n <= i.skill.radius && n > 0) return !0;
                                if (i.skill.radiusMin && n <= i.skill.radius && n >= i.skill.radiusMin) return !0;
                            }
                        }
                    return !1;
                }),
                (this.recalcCanAllocateSkills = function () {
                    var t = this;
                    this.clearCanAllocateSkills();
                    var e = this;
                    for (var i in this.allocatedSkills) {
                        var s = this.allocatedSkills[i];
                        s &&
                            s.foreachNeighbourNode(function (t) {
                                t.active || t.canAllocate || (e.canAllocate(t) && ((t.canAllocate = !0), (e.canAllocateSkills[t.skill.getHash()] = t)));
                            });
                    }
                    this.skillTree.startNode &&
                        this.skillTree.startNode.foreachNeighbourNode(function (e) {
                            e.canAllocate = t.canAllocate(e);
                        });
                }),
                (this.clearCanAllocateSkills = function () {
                    for (var t in this.canAllocateSkills) {
                        this.canAllocateSkills[t].canAllocate = !1;
                    }
                }),
                (this.reset = function () {
                    for (var t in this.allocatedSkills) {
                        var e = this.allocatedSkills[t];
                        (e.active = !1), this.passiveUnallocated(e.skill);
                    }
                    this.clearCanAllocateSkills(),
                        (this.skillPointsFromPassive = 0),
                        (this.numAllocatedSkills = 0),
                        (this.numAllocatedAscendancySkills = 0),
                        (this.allocatedSkills = {}),
                        (this.canAllocateSkills = {}),
                        (this.allocatedEffects = {}),
                        (this.allocatedExpansionSkills = {}),
                        (this.masteryCount = 0),
                        this.skillTree.events.pointsChanged.trigger();
                }),
                (this.getTotalSkillPoints = function () {
                    return this.total ? this.total + this.skillPointsFromPassive : this.extraSkillPoints + this.characterLevel - 1 + this.skillPointsFromPassive;
                }),
                (this.getTotalAscendancySkillPoints = function () {
                    return this.ascendancySkillPoints;
                }),
                (this.getPassiveSkillPointsAvailable = function () {
                    return this.getTotalSkillPoints() - this.numAllocatedSkills;
                }),
                (this.getAscendancyPassiveSkillPointsAvailable = function () {
                    return this.getTotalAscendancySkillPoints() - this.numAllocatedAscendancySkills;
                }),
                (this.passiveAllocated = function () {}),
                (this.passiveUnallocated = function () {}),
                this.init();
        };
    }),
    define("PoE/PassiveSkillTree/JewelAllocation", ["require", "./Skill", "PoE/Item/Item", "PoE/Backbone/Model/Item/Item", "PoE/Item/LayoutManager", "Underscore"], function (t) {
        var e = t("./Skill"),
            i = t("PoE/Item/Item"),
            s = t("PoE/Backbone/Model/Item/Item"),
            a = t("PoE/Item/LayoutManager"),
            n = t("Underscore");
        return (function () {
            function t(e) {
                _classCallCheck(this, t), (this.skillTree = e), (this.allocatedJewels = {}), (this.layoutManager = new a());
            }
            return (
                _createClass(t, [
                    {
                        key: "loadJewels",
                        value: function () {
                            var t = this;
                            this.skillTree.accountName &&
                                this.skillTree.characterName &&
                                $.ajax({
                                    url: "/character-window/get-passive-skills",
                                    dataType: "json",
                                    data: { accountName: this.skillTree.accountName, realm: this.skillTree.realm || null, character: this.skillTree.characterName },
                                    success: function (a) {
                                        if (a) {
                                            for (var n in a.items) {
                                                var r = a.items[n],
                                                    o = t.skillTree.jewelSlots[r.x],
                                                    l = t.skillTree.getNode(o),
                                                    h = new i({ enableVerified: !1, enableLeague: !1, showSockets: !1, manualPosition: !0, model: new s($.extend(!0, {}, r)) });
                                                h.render(), (t.allocatedJewels[o] = h);
                                                var c = { skill: o, icon: r.icon, stats: [], name: r.name, item: h, jewel: null };
                                                if (r.x in a.jewel_data) {
                                                    var d = a.jewel_data[r.x];
                                                    c.jewel = { type: d.type, radius: d.radius, radiusMin: d.radiusMin, radiusVisual: d.radiusVisual };
                                                }
                                                (l.prevSkill = l.skill), (l.skill = new e(c));
                                            }
                                            (t.skillTree.drawState.dirty = !0), (t.skillTree.drawState.dirtyFullRedraw = !0);
                                        }
                                    },
                                    fail: function (t) {
                                        console.log(t);
                                    },
                                });
                        },
                    },
                    {
                        key: "foreachAllocatedJewel",
                        value: function (t) {
                            for (var e in this.allocatedJewels) t(this.allocatedJewels[e]);
                        },
                    },
                    {
                        key: "jewelAllocated",
                        value: function () {
                            (this.skillTree.drawState.dirty = !0), (this.skillTree.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: "jewelUnallocated",
                        value: function () {
                            (this.skillTree.drawState.dirty = !0), (this.skillTree.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: "unLoadJewels",
                        value: function () {
                            var t = this;
                            n.values(this.skillTree.jewelSlots).forEach(function (e) {
                                var i = t.skillTree.getNode(e);
                                i.prevSkill && ((i.skill = i.prevSkill), (i.prevSkill = null));
                            }),
                                (this.skillTree.drawState.dirty = !0),
                                (this.skillTree.drawState.dirtyFullRedraw = !0);
                        },
                    },
                ]),
                t
            );
        })();
    }),
    define("PoE/PassiveSkillTree/Stats", [], function () {
        return function () {
            (this.init = function () {
                this.attributes = [0, 0, 0];
            }),
                (this.getAttribute = function (t) {
                    return this.attributes[t];
                }),
                (this.setAttribute = function (t, e) {
                    (this.attributes[t] = e), this.statsChanged();
                }),
                (this.addAttribute = function (t, e) {
                    (this.attributes[t] += e), this.statsChanged();
                }),
                (this.subAttribute = function (t, e) {
                    (this.attributes[t] -= e), this.statsChanged();
                }),
                (this.statsChanged = function () {}),
                this.init();
        };
    }),
    define("PoE/PassiveSkillTree/Mastery", ["require", "PoE/Helpers", "Underscore"], function (t) {
        t("PoE/Helpers");
        var e = t("Underscore");
        return (function () {
            function t(e) {
                _classCallCheck(this, t),
                    (this.hash = e.skill || null),
                    (this.activeIcon = e.activeIcon || null),
                    (this.inactiveIcon = e.inactiveIcon || null),
                    (this.activeEffectImage = e.activeEffectImage || null),
                    (this.displayName = e.name),
                    (this.masteryEffects = e.masteryEffects || []),
                    (this.connected = !1),
                    (this.atlas = e.atlas || !1);
            }
            return (
                _createClass(t, [
                    {
                        key: "getHash",
                        value: function () {
                            return this.hash;
                        },
                    },
                    {
                        key: "hasEffectId",
                        value: function (t) {
                            return this.masteryEffects && this.masteryEffects.length && t && e.findWhere(this.masteryEffects, { effect: t });
                        },
                    },
                ]),
                t
            );
        })();
    }),
    define("PoE/PassiveSkillTree/Node", ["./Skill", "./Mastery"], function (t, e) {
        var i = function (i, s) {
            (this.init = function () {
                (this.id = i),
                    (this.group = null),
                    (this.orbit = s.orbit),
                    (this.orbitIndex = s.orbitIndex),
                    (this.outNodes = {}),
                    (this.inNodes = {}),
                    (this.classStartIndex = s.classStartIndex),
                    (this.isJewel = s.isJewelSocket),
                    (this.isClusterJewel = !!s.expansionJewel),
                    (this.clusterJewelSize = this.isClusterJewel ? s.expansionJewel.size : null),
                    (this.isAscendancy = s.hasOwnProperty("ascendancyName")),
                    (this.ascendancyName = s.ascendancyName),
                    (this.isAscendancyStartNode = s.isAscendancyStart || !1),
                    (this.isBlightedNode = s.isBlighted || !1),
                    (this.canAllocateWithoutConnection = !1),
                    (this.passivePointsGranted = s.grantedPassivePoints),
                    (this.isMultipleChoice = s.isMultipleChoice),
                    (this.isMultipleChoiceOption = s.isMultipleChoiceOption),
                    (this.hidden = !1),
                    (this.active = !1),
                    (this.canAllocate = !1),
                    (this.renderState = { hover: !1 }),
                    (this.popup = null),
                    (this.clickable = null),
                    (this.similarNodeHighlighter = null),
                    (this.pathHighlighterGroup = null),
                    (this.keystone = s.isKeystone || !1),
                    (this.notable = s.isNotable || !1),
                    (this.mastery = s.isMastery || !1),
                    (this.isProxy = s.isProxy || !1),
                    (this.skill = new t(s)),
                    (this.prevSkill = null),
                    this.mastery && s.masteryEffects && (this.masteryData = new e(s));
            }),
                this.init();
        };
        return (
            (i.prototype.isClassStartNode = function () {
                return null != this.classStartIndex;
            }),
            (i.prototype.isClassStartPosition = function (t) {
                return this.isClassStartNode() && this.classStartIndex === t;
            }),
            (i.prototype.addOutNode = function (t) {
                (this.outNodes[t.skill.getHash()] = t), t.addInNode(this);
            }),
            (i.prototype.addInNode = function (t) {
                this.inNodes[t.skill.getHash()] = t;
            }),
            (i.prototype.setGroup = function (t) {
                this.group = t;
            }),
            (i.prototype.foreachOutNode = function (t) {
                for (var e in this.outNodes) if (!1 === t.call(this, this.outNodes[e])) return;
            }),
            (i.prototype.foreachInNode = function (t) {
                for (var e in this.inNodes) if (!1 === t.call(this, this.inNodes[e])) return;
            }),
            (i.prototype.foreachNeighbourNode = function (t) {
                this.foreachOutNode(t), this.foreachInNode(t);
            }),
            (i.prototype.findNeighbourNode = function (t) {
                for (var e in this.outNodes) if (t.call(this, this.outNodes[e])) return this.outNodes[e];
                for (var e in this.inNodes) if (t.call(this, this.inNodes[e])) return this.inNodes[e];
                return !1;
            }),
            (i.prototype.isKeystone = function () {
                return this.keystone;
            }),
            (i.prototype.isMastery = function () {
                return this.mastery;
            }),
            i
        );
    }),
    define("PoE/PassiveSkillTree/Group", [], function () {
        var t = function (t, e, i, s) {
            (this.id = t), (this.position = e), (this.isProxy = i), (this.background = s), (this.nodes = {}), (this.isAscendancy = !1), (this.ascendancyName = !1), (this.oldPos = !1);
        };
        return (
            (t.prototype.addNode = function (t, e) {
                (this.nodes[t] = e), e.setGroup(this);
            }),
            (t.prototype.getId = function () {
                return this.id;
            }),
            (t.prototype.foreachNode = function (t) {
                for (var e in this.nodes) t.call(this, this.nodes[e]);
            }),
            (t.prototype.isAscendancy = function () {
                return this.isAscendancy;
            }),
            (t.prototype.getAscendancy = function () {
                return this.ascendancyName;
            }),
            (t.prototype.isExpansion = function () {
                return this.isProxy;
            }),
            t
        );
    }),
    define("PoE/PassiveSkillTree/Tile", [], function () {
        return function () {
            (this.canvas = null), (this.dirty = !0);
        };
    }),
    define("PoE/PassiveSkillTree/Clickable", [], function () {
        var t = function (t, e) {
            (this.point = t), (this.radius = e), (this.mouseMoved = !1);
        };
        return (
            (t.prototype.hitTest = function (t) {
                return Math.hypot(t.worldPosition.x - this.point.x, t.worldPosition.y - this.point.y) <= this.radius;
            }),
            (t.prototype.onclickTest = function (t) {
                return !!this.hitTest(t) && (this.onclick(t), !0);
            }),
            (t.prototype.onmousemoveTest = function (t) {
                if (!this.hitTest(t)) return !1;
                (this.mouseMoved = !0), this.onmousemove(t);
            }),
            (t.prototype.forceMouseOut = function () {
                if (!this.mouseMoved) return !1;
                (this.mouseMoved = !1), this.onmouseout();
            }),
            (t.prototype.onmouseoutTest = function (t) {
                return !!this.mouseMoved && !this.hitTest(t) && ((this.mouseMoved = !1), void this.onmouseout());
            }),
            (t.prototype.onclick = function (t) {}),
            (t.prototype.onmousemove = function (t) {}),
            (t.prototype.onmouseout = function (t) {}),
            t
        );
    }),
    define("PoE/PassiveSkillTree/BFS/PathIterator", [], function () {
        return function (t, e) {
            (this.startNode = t),
                (this.nodeRelationshipData = e),
                (this.iterate = function (e) {
                    var i = [],
                        s = this.nodeRelationshipData[t.skill.getHash()].parents;
                    i.push(t);
                    var a = [];
                    for (a.push(t), visited = {}; a.length > 0; )
                        for (var n = a.pop(), r = this.nodeRelationshipData[n.skill.getHash()], o = 0, l = (s = r.parents).length; o < l; ++o)
                            e(n, s[o], r.depth), void 0 === visited[s[o].skill.getHash()] && ((visited[s[o].skill.getHash()] = !0), a.push(s[o]), i.push(s[o]));
                    return i;
                }),
                (this.getStartNodeDepth = function () {
                    return this.nodeRelationshipData[this.startNode.skill.getHash()].depth;
                });
        };
    }),
    define("PoE/PassiveSkillTree/UtilityFunctions", [], function () {
        return {
            calculateLerpPosition: function (t, e, i) {
                return (e - t) / i;
            },
            calculateFlipPosition: function (t, e, i) {
                var s = (e - t) / i,
                    a = s % 1;
                return 0 == parseInt(s) % 2 ? a : 1 - a;
            },
        };
    }),
    define("PoE/PassiveSkillTree/RGBA", ["./UtilityFunctions"], function (t) {
        return function e(i, s, a, n) {
            (this.r = i || 0),
                (this.g = s || 0),
                (this.b = a || 0),
                (this.a = n || 0),
                (this.addA = function (t) {
                    (this.a += t), this.a > 1 && (this.a = 1);
                }),
                (this.flipBetween = function (e, i, s, a, n, r, o, l) {
                    this.setInterpolatedValue(e, i, t.calculateFlipPosition(s, a, n), t.calculateFlipPosition(s, a, r), t.calculateFlipPosition(s, a, o), t.calculateFlipPosition(s, a, l));
                }),
                (this.lerpBetween = function (e, i, s, a, n, r, o, l) {
                    this.setInterpolatedValue(e, i, t.calculateLerpPosition(s, a, n), t.calculateLerpPosition(s, a, r), t.calculateLerpPosition(s, a, o), t.calculateLerpPosition(s, a, l));
                }),
                (this.setInterpolatedValue = function (t, e, i, s, a, n) {
                    var r = this,
                        o = function (i, s) {
                            t[i] < e[i] ? ((r[i] = t[i] + (e[i] - t[i]) * s), r[i] > e[i] && (r[i] = e[i])) : ((r[i] = t[i] - (t[i] - e[i]) * s), r[i] < e[i] && (r[i] = e[i]));
                        };
                    o("r", i), o("g", s), o("b", a), o("a", n), (this.r = Math.round(this.r)), (this.g = Math.round(this.g)), (this.b = Math.round(this.b));
                }),
                (this.getCanvasRGBA = function () {
                    return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
                }),
                (this.clone = function () {
                    return new e(this.r, this.g, this.b, this.a);
                });
        };
    }),
    define("PoE/PassiveSkillTree/PathHighlighter", ["./BFS/PathIterator", "./RGBA"], function (t, e) {
        return function (i, s, a) {
            (this.init = function () {
                (this.skillTree = i),
                    (this.drawObject = null),
                    (this.bfsPathIterator = new t(s, a)),
                    (this.states = { BEGIN: 0, DEFAULT: 1, END: 2 }),
                    (this.state = this.states.BEGIN),
                    (this.params = {}),
                    (this.params[this.states.DEFAULT] = { speed: 1e3, sFillC: new e(50, 50, 255, 0.4), eFillC: new e(50, 50, 255, 0.6), sStrokeC: new e(200, 200, 255, 0.4), eStrokeC: new e(255, 255, 255, 0.6) }),
                    (this.params[this.states.END] = { speed: 100, sFillC: null, sStrokeC: null, eFillC: new e(), eStrokeC: new e(0, 0, 0, 0) }),
                    (this.params[this.states.BEGIN] = { speed: 50, sFillC: new e(255, 255, 255, 1), sStrokeC: new e(255, 255, 255, 1) }),
                    (this.params[this.states.BEGIN].eFillC = this.params[this.states.DEFAULT].sFillC),
                    (this.params[this.states.BEGIN].eStrokeC = this.params[this.states.DEFAULT].sStrokeC),
                    (this.events = { endFunc: function () {} }),
                    (this.start = new Date().getTime()),
                    this.setupDrawObject(),
                    this.begin();
            }),
                (this.setupDrawObject = function () {
                    (this.drawObject = new (function (t) {
                        this.init = function () {
                            (this.highlighter = t),
                                (this.skillTree = t.skillTree),
                                (this.fillC = new e(50, 50, 255, 0.5)),
                                (this.strokeC = new e(50, 50, 255, 0.6)),
                                (this.fillC = new e(50, 50, 255, 0.5)),
                                (this.strokeC = new e(50, 50, 255, 0.6));
                        };
                        var i = this;
                        (this.begin = function () {
                            var t = this.highlighter.params[this.highlighter.states.BEGIN],
                                e = this;
                            setTimeout(function () {
                                e.beginDefault();
                            }, t.speed);
                        }),
                            (this.beginDefault = function (t) {
                                (this.highlighter.start = t || new Date().getTime()), (this.highlighter.state = this.highlighter.states.DEFAULT);
                            }),
                            (this.end = function () {
                                (this.highlighter.state = this.highlighter.states.END),
                                    (this.highlighter.params[this.highlighter.states.END].sFillC = this.fillC.clone()),
                                    (this.highlighter.params[this.highlighter.states.END].sStrokeC = this.strokeC.clone()),
                                    (this.highlighter.start = new Date().getTime());
                                var t = this;
                                setTimeout(function () {
                                    t.endImmediately();
                                }, this.highlighter.params[this.highlighter.states.END].speed);
                            }),
                            (this.endImmediately = function () {
                                this.skillTree.midDrawObjects.remove(this.highlighter.drawObject) && this.highlighter.events.endFunc();
                            }),
                            (this.draw = function () {
                                var t = i.skillTree.midCtx,
                                    e = function (t, e, s) {
                                        var a = e.position,
                                            n = new Date().getTime();
                                        switch (i.highlighter.state) {
                                            case i.highlighter.states.BEGIN:
                                                var r = i.highlighter.params[i.highlighter.states.BEGIN];
                                                i.fillC.lerpBetween(r.sFillC, r.eFillC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed),
                                                    i.strokeC.lerpBetween(r.sStrokeC, r.eStrokeC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed);
                                                break;
                                            case i.highlighter.states.DEFAULT:
                                                r = i.highlighter.params[i.highlighter.states.DEFAULT];
                                                i.fillC.flipBetween(r.sFillC, r.eFillC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed),
                                                    i.strokeC.flipBetween(r.sStrokeC, r.eStrokeC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed);
                                                break;
                                            case i.highlighter.states.END:
                                                r = i.highlighter.params[i.highlighter.states.END];
                                                i.strokeC.lerpBetween(r.sStrokeC, r.eStrokeC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed);
                                        }
                                        if (i.skillTree.viewPort.bounds.contains(a)) {
                                            var o = i.skillTree.getNodeRadius(t);
                                            if (
                                                ((a = i.skillTree.worldToScreen(a)),
                                                i.skillTree.midCtx.beginPath(),
                                                (i.skillTree.midCtx.lineWidth = 2),
                                                (i.skillTree.midCtx.strokeStyle = "rgba(255,255,255,1)"),
                                                (i.skillTree.midCtx.fillStyle = "rgba(255,255,255,1)"),
                                                i.skillTree.midCtx.arc(a.x, a.y, o * i.skillTree.viewPort.zoom, 0, 2 * Math.PI, !1),
                                                (i.skillTree.midCtx.globalCompositeOperation = "destination-out"),
                                                i.skillTree.midCtx.fill(),
                                                i.skillTree.midCtx.stroke(),
                                                (i.skillTree.midCtx.strokeStyle = i.strokeC.getCanvasRGBA()),
                                                (i.skillTree.midCtx.fillStyle = i.fillC.getCanvasRGBA()),
                                                (i.skillTree.midCtx.globalCompositeOperation = "source-over"),
                                                i.skillTree.midCtx.fill(),
                                                i.skillTree.midCtx.stroke(),
                                                null !== s)
                                            ) {
                                                var l = 50 * i.skillTree.viewPort.zoom,
                                                    h = i.skillTree.midCtx.measureText(s).width;
                                                i.strokeC.addA(0.3), (i.skillTree.midCtx.fillStyle = i.strokeC.getCanvasRGBA()), (i.skillTree.midCtx.font = l + "pt FontinBold"), i.skillTree.midCtx.fillText(s, a.x - h / 2, a.y + l / 2);
                                            }
                                        } else
                                            i.skillTree.drawViewportIntersectionPoint(a, function (t) {
                                                i.skillTree.topCtx.beginPath(),
                                                    (i.skillTree.topCtx.lineWidth = 2),
                                                    (i.skillTree.topCtx.strokeStyle = i.strokeC.getCanvasRGBA()),
                                                    (i.skillTree.topCtx.fillStyle = i.fillC.getCanvasRGBA()),
                                                    i.skillTree.topCtx.arc(t.x, t.y, 2, 0, 2 * Math.PI, !1),
                                                    i.skillTree.topCtx.fill(),
                                                    i.skillTree.topCtx.stroke(),
                                                    (i.skillTree.drawState.topDirty = !0);
                                            });
                                    };
                                i.highlighter.bfsPathIterator.iterate(function (e, s) {
                                    i.skillTree.drawPathBetweenNodes(
                                        e,
                                        s,
                                        function (e, s) {
                                            var a = e.position,
                                                n = s.position;
                                            (a = i.skillTree.worldToScreen(a)),
                                                (n = i.skillTree.worldToScreen(n)),
                                                t.beginPath(),
                                                (t.lineWidth = 3),
                                                (t.strokeStyle = i.strokeC.getCanvasRGBA()),
                                                t.moveTo(a.x, a.y),
                                                t.lineTo(n.x, n.y),
                                                t.stroke();
                                        },
                                        function (e, s, a, n) {
                                            (e = i.skillTree.worldToScreen(e)),
                                                t.beginPath(),
                                                (t.lineWidth = 3),
                                                (t.strokeStyle = i.strokeC.getCanvasRGBA()),
                                                t.arc(e.x, e.y, n * i.skillTree.viewPort.zoom, s - Math.PI / 2, a - Math.PI / 2, !1),
                                                t.stroke();
                                        }
                                    );
                                }),
                                    i.highlighter.bfsPathIterator.iterate(function (t, s, a) {
                                        e(s, i.skillTree.getNodePositionInfo(s), null);
                                    }),
                                    e(i.highlighter.bfsPathIterator.startNode, i.skillTree.getNodePositionInfo(i.highlighter.bfsPathIterator.startNode), i.highlighter.bfsPathIterator.getStartNodeDepth());
                            }),
                            this.init();
                    })(this)),
                        this.skillTree.midDrawObjects.add(this.drawObject, 0);
                }),
                (this.begin = function () {
                    this.drawObject.begin();
                }),
                (this.beginDefault = function (t) {
                    this.drawObject.beginDefault(t);
                }),
                (this.end = function () {
                    this.drawObject.end();
                }),
                (this.endImmediately = function () {
                    this.drawObject.endImmediately();
                }),
                this.init();
        };
    }),
    define("PoE/PassiveSkillTree/PathHighlighterGroup", ["./PathHighlighter"], function (t) {
        return function (e, i) {
            (this.init = function () {
                (this.skillTree = e), (this.shortestPathsSets = i), (this.pathHighlighters = []);
            }),
                (this.begin = function () {
                    this.pathHighlighters = [];
                    for (var e = 0, i = this.shortestPathsSets.length; e < i; ++e) (s = this), (a = this.shortestPathsSets[e]), (s.pathHighlighters[e] = new t(s.skillTree, a.goalNodeData.node, a.nodeRelationshipData));
                    var s, a;
                }),
                (this.end = function () {
                    for (var t = 0, e = this.shortestPathsSets.length; t < e; ++t) this.pathHighlighters[t].end();
                }),
                this.init();
        };
    }),
    define("PoE/PassiveSkillTree/MasteryPopup", ["require", "plugins", "PoE/Layout/Popup/Popup", "PoE/Geom/Point", "PoE/Geom/Bounds", "Handlebars", "Underscore", "PoE/Helpers"], function (t) {
        var e = t("plugins"),
            i = t("PoE/Layout/Popup/Popup"),
            s = t("PoE/Geom/Point"),
            a = t("PoE/Geom/Bounds"),
            n = t("Handlebars"),
            r = t("Underscore"),
            o =
                (t("PoE/Helpers"),
                (function () {
                    function t(e, s, a) {
                        var n = this;
                        _classCallCheck(this, t),
                            (this.mastery = e),
                            (this.passiveAllocation = s),
                            (this.editable = a),
                            (this.$el = document.createElement("div")),
                            this.render(),
                            (this.popup = new i(this.$el)),
                            this.popup.create(),
                            (this.popup.events.prePosition = function () {
                                n.updatePopupWidth();
                            });
                    }
                    return (
                        _createClass(t, [
                            {
                                key: "render",
                                value: function () {
                                    var i = this,
                                        s = this.mastery.getHash(),
                                        a = this.passiveAllocation.allocatedEffects[s] || null,
                                        n = r.values(this.passiveAllocation.allocatedEffects);
                                    this.$el.classList.add("masteryPopupContainer"), this.$el.classList.add("masteryPopup"), this.$el.classList.toggle("allocated", this.editable || a);
                                    var o,
                                        l = this.mastery.masteryEffects.slice(),
                                        h = _createForOfIteratorHelper(l);
                                    try {
                                        for (h.s(); !(o = h.n()).done; ) {
                                            var c = o.value,
                                                d = r.contains(n, c.effect);
                                            this.editable ? (c.checked = c.disabled = d) : ((c.checked = d), (c.disabled = c.effect !== a));
                                        }
                                    } catch (t) {
                                        h.e(t);
                                    } finally {
                                        h.f();
                                    }
                                    (this.$el.innerHTML = t.prototype.Template({ name: this.mastery.displayName, hash: this.mastery.hash, masteryEffects: l, selectedEffect: a, editable: this.editable, atlas: this.mastery.atlas }).trim()),
                                        this.editable &&
                                            this.$el.querySelectorAll(".selectable-stat").forEach(function (t) {
                                                var a = parseInt(t.dataset.id);
                                                t.addEventListener("change", function () {
                                                    e(i).trigger("allocateMastery", [s, a]);
                                                });
                                            });
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    delete this.popup, this.$el.remove();
                                },
                            },
                            {
                                key: "updatePopupWidth",
                                value: function () {
                                    (this.$el.style.position = "relative"), (this.$el.style.top = "0"), (this.$el.style.left = "0"), (this.$el.style.width = "auto");
                                    var t = this.$el.querySelector(".masteryName .lc"),
                                        e = (t ? t.offsetWidth : 0) + 92;
                                    this.$el.querySelectorAll(".masteryIcon").forEach(function (t) {
                                        e = Math.max(e, t.offsetWidth + 14);
                                    });
                                    var i = Math.min(e, 760);
                                    this.$el.style.width = "".concat(i, "px");
                                },
                            },
                            {
                                key: "reposition",
                                value: function (t) {
                                    var e = new s(t.viewport.x + t.x, t.viewport.y + t.y);
                                    if (this.editable) this.popup.positionRight(new a(e, e));
                                    else {
                                        var i = new a(new s(t.viewport.x, t.viewport.y), new s(t.viewport.x + t.viewport.width, t.viewport.y + t.viewport.height));
                                        this.popup.positionSmartLeft(new a(e, e), i);
                                    }
                                },
                            },
                            {
                                key: "handleMouseClick",
                                value: function (t) {
                                    this.popup.show(), this.reposition(t);
                                },
                            },
                            {
                                key: "handleMouseover",
                                value: function (t) {
                                    this.popup.show(), this.hoverStart(), this.reposition(t);
                                },
                            },
                            {
                                key: "handleMouseout",
                                value: function () {
                                    this.popup.hide(), this.hoverEnd();
                                },
                            },
                            {
                                key: "hoverStart",
                                value: function () {
                                    this.$el.classList.add("hovered");
                                },
                            },
                            {
                                key: "hoverEnd",
                                value: function () {
                                    this.$el.classList.remove("hovered");
                                },
                            },
                            {
                                key: "hidePopup",
                                value: function () {
                                    this.popup.hide();
                                },
                            },
                        ]),
                        t
                    );
                })());
        return (
            (o.prototype.Template = n.compile(
                '\n        <div class="masteryHeader">\n            <div class="masteryName">\n                <span class="lc">{{name}}</span>\n            </div>\n        </div>\n        <div class="content">\n        {{#each masteryEffects}}\n            <div class="masteryIcon">\n                <input type="radio" {{#if disabled}}disabled{{/if}} {{#if checked}}checked{{/if}} id="effect-{{effect}}" data-id="{{effect}}"\n                    class="selectable-stat" value="{{effect}}" />\n                <label for="effect-{{effect}}">{{"\n"~}}\n                    <div class="explicitMod">{{#each stats}}{{#if @index}}<br>{{/if}}<span class="lc">{{{this}}}</span>{{/each}}</div>\n                </label>\n                {{#if reminderText}}\n                <div class="descrText">{{#each reminderText}}{{#if @index}}<br>{{/if}}<span class="lc">{{this}}</span>{{/each}}</div>\n                {{/if}}\n            </div>\n        {{/each}}\n        {{#if atlas}}\n        <div class="atlasHoverText"><span class="lc">{{translate "Hover or click to highlight other clusters of the same type"}}</span></div>\n        {{/if}}\n        </div>\n    '
            )),
            o
        );
    }),
    define("PoE/PassiveSkillTree/BFS/NodeData", [], function () {
        return function (t, e) {
            (this.node = t), (this.parents = []), (this.depth = e);
        };
    }),
    define("PoE/PassiveSkillTree/ByteDecoder", [], function () {
        return function () {
            (this.init = function () {
                (this.dataString = ""), (this.position = 0);
            }),
                (this.bytesToInt16 = function (t) {
                    return this.bytesToInt(t, 2);
                }),
                (this.bytesToInt = function (t, e) {
                    e = e || 4;
                    for (var i = 0, s = 0; s < e; ++s) (i += t[s]), s < e - 1 && (i <<= 8);
                    return i;
                }),
                (this.hasData = function () {
                    return this.position < this.dataString.length;
                }),
                (this.getDataString = function () {
                    return this.dataString;
                }),
                (this.setDataString = function (t) {
                    (this.dataString = t), (this.position = 0);
                }),
                (this.readInt8 = function () {
                    return this.readInt(1);
                }),
                (this.readInt16 = function () {
                    return this.readInt(2);
                }),
                (this.readInt = function (t) {
                    t = t || 4;
                    var e = this.position + t;
                    if (e > this.dataString.length) throw "Integer read exceeds bounds";
                    for (var i = []; this.position < e; ++this.position) i.push(this.dataString.charAt(this.position).charCodeAt(0));
                    return this.bytesToInt(i, t);
                }),
                this.init();
        };
    }),
    define("PoE/PassiveSkillTree/NodeHighlighter/AnimationType", [], function () {
        return { Default: 0, In: 1, Out: 2 };
    }),
    define("PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter", ["jquery", "PoE/PassiveSkillTree/RGBA", "./AnimationType"], function (t, e, i) {
        return (function () {
            function s(t, a) {
                var n;
                _classCallCheck(this, s),
                    (this.acceptFunc = function (t) {
                        return !0;
                    }),
                    (this.animations =
                        (_defineProperty((n = {}), i.In, { speed: 50, fillColour: { start: new e(255, 255, 255, 0) }, strokeColour: { start: new e(255, 255, 255, 0) } }),
                        _defineProperty(n, i.Default, { speed: 1e3, fillColour: { start: new e(255, 213, 47, 0.3), end: new e(255, 213, 47, 0.6) }, strokeColour: { start: new e(255, 213, 47, 0.4), end: new e(255, 213, 47, 0.7) } }),
                        _defineProperty(n, i.Out, { speed: 100, fillColour: { start: null, end: new e() }, strokeColour: { start: null, end: new e(255, 255, 255, 0) } }),
                        n)),
                    t.atlas &&
                        ((this.animations[i.In] = { speed: 200, fillColour: { start: new e(255, 255, 255, 0) }, strokeColour: { start: new e(255, 255, 255, 0) } }),
                        (this.animations[i.Default] = { speed: 1e3, fillColour: { start: new e(255, 255, 255, 0), end: new e(255, 255, 255, 0) }, strokeColour: { start: new e(255, 255, 255, 0.1), end: new e(255, 255, 255, 1) } }),
                        (this.animations[i.Out] = { speed: 200, fillColour: { start: null, end: new e() }, strokeColour: { start: null, end: new e(255, 255, 255, 0) } })),
                    (this.skillTree = t),
                    this.init(a);
            }
            return (
                _createClass(s, [
                    {
                        key: "draw",
                        value: function () {
                            var t = this,
                                e = new Date().getTime(),
                                s = this.skillTree.viewPort.zoom,
                                a = this.skillTree.viewPort.zoomIndex,
                                n = Math.min(2, a + 1);
                            switch (this.animationState) {
                                case i.In:
                                    var r = this.animations[i.In];
                                    this.fillColour.lerpBetween(r.fillColour.start, r.fillColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed),
                                        this.strokeColour.lerpBetween(r.strokeColour.start, r.strokeColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed);
                                    break;
                                case i.Default:
                                    r = this.animations[i.Default];
                                    this.fillColour.flipBetween(r.fillColour.start, r.fillColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed),
                                        this.strokeColour.flipBetween(r.strokeColour.start, r.strokeColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed);
                                    break;
                                case i.Out:
                                    r = this.animations[i.Out];
                                    this.fillColour.lerpBetween(r.fillColour.start, r.fillColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed),
                                        this.strokeColour.lerpBetween(r.strokeColour.start, r.strokeColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed);
                            }
                            for (var o = 0, l = this.nodes.length; o < l; ++o) {
                                var h = this.nodes[o],
                                    c = this.skillTree.getNodeRadius(h),
                                    d = this.skillTree.getNodePositionInfo(h).position;
                                if (this.skillTree.viewPort.bounds.contains(d)) {
                                    if (
                                        ((d = this.skillTree.worldToScreen(d)),
                                        this.skillTree.midCtx.beginPath(),
                                        (this.skillTree.midCtx.strokeStyle = this.strokeColour.getCanvasRGBA()),
                                        (this.skillTree.midCtx.fillStyle = this.fillColour.getCanvasRGBA()),
                                        (this.skillTree.midCtx.lineWidth = n),
                                        this.skillTree.midCtx.arc(d.x, d.y, c * s, 0, 2 * Math.PI, !1),
                                        this.skillTree.midCtx.fill(),
                                        this.skillTree.midCtx.stroke(),
                                        h.isMastery() && this.skillTree.atlas && this.atlasMasteryOverlay)
                                    ) {
                                        var u = this.skillTree.imageZoomLevels[3],
                                            f = this.skillTree.assets.get("masteryOverlay", h.skill.icon, u);
                                        if (f) {
                                            var v = f.width * (s / u),
                                                p = v / 2;
                                            (v = Math.round(v)),
                                                this.skillTree.midCtx.save(),
                                                this.skillTree.midCtx.drawImage(f, f.coords.x, f.coords.y, f.width, f.height, Math.round(d.x - p), Math.round(d.y - p), v, v),
                                                this.skillTree.midCtx.restore();
                                        }
                                    }
                                } else
                                    this.skillTree.drawViewportIntersectionPoint(d, function (e) {
                                        t.skillTree.topCtx.beginPath(),
                                            (t.skillTree.topCtx.lineWidth = 2),
                                            (t.skillTree.topCtx.strokeStyle = t.strokeColour.getCanvasRGBA()),
                                            (t.skillTree.topCtx.fillStyle = t.fillColour.getCanvasRGBA()),
                                            t.skillTree.topCtx.arc(e.x, e.y, 2, 0, 2 * Math.PI, !1),
                                            t.skillTree.topCtx.fill(),
                                            t.skillTree.topCtx.stroke(),
                                            (t.skillTree.drawState.topDirty = !0);
                                    });
                            }
                        },
                    },
                    {
                        key: "begin",
                        value: function () {
                            var t = this;
                            (this.animations[i.In].fillColour.end = this.animations[i.Default].fillColour.start),
                                setTimeout(function () {
                                    t.beginDefault();
                                }, this.animations[i.In].speed);
                        },
                    },
                    {
                        key: "beginDefault",
                        value: function (t) {
                            (this.start = t || new Date().getTime()), (this.animationState = i.Default);
                        },
                    },
                    {
                        key: "end",
                        value: function (e) {
                            var s = t.Deferred(),
                                a = this;
                            return (
                                (this.animationState = i.Out),
                                (this.animations[i.Out].fillColour.start = this.fillColour.clone()),
                                (this.animations[i.Out].strokeColour.start = this.strokeColour.clone()),
                                (this.start = new Date().getTime()),
                                0 === this.animations[i.Out].speed
                                    ? (a.endImmediately(), s.resolve())
                                    : setTimeout(function () {
                                          a.endImmediately(), s.resolve();
                                      }, this.animations[i.Out].speed),
                                s.promise()
                            );
                        },
                    },
                    {
                        key: "endImmediately",
                        value: function () {
                            this.skillTree.midDrawObjects.remove(this.drawObject);
                        },
                    },
                    {
                        key: "copyStateFrom",
                        value: function (t) {
                            (this.start = t.start), (this.fillColour = t.fillColour.clone()), (this.strokeColour = t.strokeColour.clone());
                        },
                    },
                    {
                        key: "init",
                        value: function (t) {
                            (this.atlasMasteryOverlay = !1),
                                t && ((this.atlasMasteryOverlay = t.atlasMasteryOverlay || !1), t.animations && this.configAnimation(t.animations)),
                                (this.fillColour = new e()),
                                (this.strokeColour = new e()),
                                (this.start = new Date().getTime()),
                                (this.nodes = t.nodes || []),
                                (this.animationState = i.In),
                                (this.animations[i.In].fillColour.end = this.animations[i.Default].fillColour.start),
                                (this.animations[i.In].strokeColour.end = this.animations[i.Default].strokeColour.start);
                            var s = this;
                            (this.drawObject = {
                                draw: function () {
                                    s.draw();
                                },
                            }),
                                this.skillTree.midDrawObjects.add(this.drawObject, 10);
                        },
                    },
                    {
                        key: "setNodes",
                        value: function (t) {
                            this.nodes = t;
                        },
                    },
                    {
                        key: "configAnimation",
                        value: function (t) {
                            if (t) {
                                var e = function (t, e) {
                                    void 0 !== e.speed && (t.speed = e.speed),
                                        e.fillColour && (e.fillColour.start && (t.fillColour.start = e.fillColour.start), e.fillColour.end && (t.fillColour.end = e.fillColour.end)),
                                        e.strokeColour && (e.strokeColour.start && (t.strokeColour.start = e.strokeColour.start), e.strokeColour.end && (t.strokeColour.end = e.strokeColour.end));
                                };
                                t && void 0 !== t[i.Default] && e(this.animations[i.Default], t[i.Default]), t && void 0 !== t[i.In] && e(this.animations[i.In], t[i.In]), t && void 0 !== t[i.Out] && e(this.animations[i.Out], t[i.Out]);
                            }
                        },
                    },
                ]),
                s
            );
        })();
    }),
    define("PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup", [], function () {
        var t = function (t) {
            this.init(t);
        };
        return (
            (t.prototype.foreachHighlighter = function (t) {
                for (var e = 0, i = this.highlighters.length; e < i; ++e) t(this.highlighters[e], e);
            }),
            (t.prototype.begin = function () {
                this.foreachHighlighter(function (t) {
                    t.begin();
                });
            }),
            (t.prototype.beginDefault = function (t) {
                this.foreachHighlighter(function (e) {
                    e.beginDefault(t);
                });
            }),
            (t.prototype.end = function () {
                var t = [];
                return (
                    this.foreachHighlighter(function (e) {
                        t.push(e.end());
                    }),
                    $.when.apply(null, t)
                );
            }),
            (t.prototype.endImmediately = function () {
                this.foreachHighlighter(function (t) {
                    t.endImmediately();
                });
            }),
            (t.prototype.copyStateFrom = function (t) {
                this.foreachHighlighter(function (e, i) {
                    e.copyStateFrom(t.getHighlighter(i));
                });
            }),
            (t.prototype.getHighlighter = function (t) {
                return this.highlighters[t];
            }),
            (t.prototype.init = function (t) {
                t && (this.highlighters = t.highlighters || []);
            }),
            t
        );
    }),
    define("PoE/PassiveSkillTree/SkillPoints", ["require", "Handlebars", "jquery", "PoE/Helpers"], function (t) {
        var e = t("Handlebars"),
            i = t("jquery"),
            s = t("PoE/Helpers"),
            a = (function () {
                function t(e) {
                    _classCallCheck(this, t);
                    var a = document.createElement("div");
                    (this.points = e.points),
                        (this.pointsText = this.getPointsText(this.points, !1)),
                        (this.ascendancyPoints = e.ascendancyPoints),
                        (this.ascendancyPointsText = this.getPointsText(this.ascendancyPoints, !0)),
                        (this.atlas = e.atlas),
                        (this.readonly = e.readonly),
                        (a.innerHTML = t.prototype
                            .Template({
                                points: this.points,
                                pointsText: this.pointsText,
                                ascendancyPoints: this.ascendancyPoints,
                                ascendancyPointsText: this.ascendancyPointsText,
                                atlas: this.atlas,
                                readonly: this.readonly,
                                readonlyText: s.translate("This tree is in read only mode"),
                            })
                            .trim()),
                        (this.$el = a.firstElementChild),
                        0 === i("#passiveSkillTree .tree-points").length ? this.render() : this.updateText();
                }
                return (
                    _createClass(t, [
                        {
                            key: "getPointsText",
                            value: function (t, e) {
                                return (e ? s.translate("Ascendancy") + " " : "") + (1 === t ? s.translate("Point Left") : s.translate("Points Left"));
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                i("#passiveSkillTree").append(this.$el);
                            },
                        },
                        {
                            key: "updateText",
                            value: function (t, e) {
                                this.readonly ||
                                    ((this.points = t),
                                    (this.pointsText = this.getPointsText(this.points, !1)),
                                    (this.ascendancyPoints = e),
                                    (this.ascendancyPointsText = this.getPointsText(this.ascendancyPoints, !0)),
                                    i("#treePoints").text("".concat(this.points, " ").concat(this.pointsText)),
                                    this.atlas || i("#ascendancyPoints").text("".concat(this.ascendancyPoints, " ").concat(this.ascendancyPointsText)));
                            },
                        },
                    ]),
                    t
                );
            })();
        return (
            (a.prototype.Template = e.compile(
                '\n        <div id="treePointsContainer" class="tree-points">\n            {{#if readonly}}\n            <div class="FontinBold">{{readonlyText}}</div>\n            {{else}}\n            <div class="tree-points-container FontinBold">\n                <span id="treePoints" class="tree-points-text">{{points}} {{pointsText}}</span>\n            </div>\n            {{#unless atlas}}\n            <div class="tree-points-container FontinBold">\n                <span id="ascendancyPoints" class="tree-points-text ascendancy-points">{{ascendancyPoints}} {{ascendancyPointsText}}</span>\n            </div>\n            {{/unless}}\n            {{/if}}\n        </div>\n    '
            )),
            a
        );
    }),
    define("PoE/PassiveSkillTree/AssetManager", ["require"], function (t) {
        var e = (function () {
            function t(e, i) {
                for (var s in (_classCallCheck(this, t), (this.passiveTree = e), (this.assets = {}), i))
                    for (var a in ((this.assets[s] = {}), i[s])) {
                        var n = i[s][a].filename;
                        for (var r in i[s][a].coords) {
                            var o = i[s][a].coords[r],
                                l = new Image();
                            (l._src = n), (l.name = r), (l.width = o.w), (l.height = o.h), (l.coords = { x: o.x, y: o.y }), void 0 === this.assets[s][r] && (this.assets[s][r] = {}), (this.assets[s][r][a] = l);
                        }
                    }
            }
            return (
                _createClass(t, [
                    {
                        key: "load",
                        value: function (t) {
                            var e = this;
                            return (
                                t &&
                                    void 0 !== t._src &&
                                    ((t.src = t._src),
                                    delete t._src,
                                    t.complete ||
                                        t.addEventListener(
                                            "load",
                                            function (t) {
                                                e.passiveTree.fullRedraw();
                                            },
                                            { once: !0 }
                                        )),
                                t
                            );
                        },
                    },
                    {
                        key: "get",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                s = this.assets[t][e] || null;
                            return s ? this.load(s[i]) : (console.warn("Missing file ".concat(e, " at zoom ").concat(i, " for spritesheet ").concat(t)), null);
                        },
                    },
                ]),
                t
            );
        })();
        return e;
    }),
    define("PoE/PassiveSkillTree/PassiveSkillTree", [
        "require",
        "plugins",
        "PoE/Geom/Bounds",
        "PoE/Geom/Point",
        "PoE/PassiveSkillTree/ObjectList",
        "PoE/PassiveSkillTree/EventContainer",
        "PoE/PassiveSkillTree/PassiveAllocation",
        "PoE/PassiveSkillTree/JewelAllocation",
        "PoE/PassiveSkillTree/Stats",
        "PoE/PassiveSkillTree/Node",
        "PoE/PassiveSkillTree/Group",
        "PoE/PassiveSkillTree/Tile",
        "PoE/PassiveSkillTree/Clickable",
        "PoE/PassiveSkillTree/PathHighlighterGroup",
        "PoE/PassiveSkillTree/SkillPopup",
        "PoE/PassiveSkillTree/MasteryPopup",
        "PoE/PassiveSkillTree/Mastery",
        "PoE/PassiveSkillTree/BFS/NodeData",
        "PoE/PassiveSkillTree/ByteDecoder",
        "PoE/PassiveSkillTree/ByteEncoder",
        "PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter",
        "PoE/PassiveSkillTree/NodeHighlighter/AnimationType",
        "PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup",
        "PoE/PassiveSkillTree/RGBA",
        "PoE/Helpers",
        "PoE/Item/Item",
        "PoE/Backbone/Model/Item/Item",
        "PoE/PassiveSkillTree/GenerateLink",
        "PoE/PassiveSkillTree/Version",
        "PoE/PassiveSkillTree/SkillPoints",
        "PoE/PassiveSkillTree/AssetManager",
        "Underscore",
        "es6-promise",
    ], function (t) {
        var e = t("plugins"),
            i = t("PoE/Geom/Bounds"),
            s = t("PoE/Geom/Point"),
            a = t("PoE/PassiveSkillTree/ObjectList"),
            n = t("PoE/PassiveSkillTree/EventContainer"),
            r = t("PoE/PassiveSkillTree/PassiveAllocation"),
            o = t("PoE/PassiveSkillTree/JewelAllocation"),
            l = t("PoE/PassiveSkillTree/Stats"),
            h = t("PoE/PassiveSkillTree/Node"),
            c = t("PoE/PassiveSkillTree/Group"),
            d = t("PoE/PassiveSkillTree/Tile"),
            u = t("PoE/PassiveSkillTree/Clickable"),
            f = t("PoE/PassiveSkillTree/PathHighlighterGroup"),
            v = t("PoE/PassiveSkillTree/SkillPopup"),
            p = t("PoE/PassiveSkillTree/MasteryPopup"),
            g = t("PoE/PassiveSkillTree/Mastery"),
            y = t("PoE/PassiveSkillTree/BFS/NodeData"),
            w = t("PoE/PassiveSkillTree/ByteDecoder"),
            k = (t("PoE/PassiveSkillTree/ByteEncoder"), t("PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter")),
            m = t("PoE/PassiveSkillTree/NodeHighlighter/AnimationType"),
            P = t("PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup"),
            S = t("PoE/PassiveSkillTree/RGBA"),
            C = t("PoE/Helpers"),
            b = (t("PoE/Item/Item"), t("PoE/Backbone/Model/Item/Item"), t("PoE/PassiveSkillTree/GenerateLink")),
            T = t("PoE/PassiveSkillTree/Version"),
            x = t("PoE/PassiveSkillTree/SkillPoints"),
            A = t("PoE/PassiveSkillTree/AssetManager"),
            N = t("Underscore");
        t("es6-promise");
        var E = (function () {
            function t(h, c, d, u, f, v, p) {
                var g = this;
                if (
                    (_classCallCheck(this, t),
                    (this.containerEl = e("#" + h)),
                    (this.fullscreenContainerEl = e("#" + c)),
                    p && p.fullscreen ? this.containerEl.css("width", "100vw") : this.containerEl.width(d),
                    this.containerEl.height(u),
                    (this.accountName = !1),
                    (this.characterName = !1),
                    (this.characterClass = !1),
                    (this.ascendancyClass = null),
                    (this.ascendancyClassName = null),
                    (this.ascendancyClasses = v.classes),
                    (this.ascendancyClassPopupHidden = !0),
                    (this.ascendancyStartNode = !1),
                    (this.ascendancyButton = { state: "AscendancyButton", clickable: !1 }),
                    (this.lastQuery = ""),
                    (this.initialWidth = d),
                    (this.initialHeight = u),
                    (this.$window = e(window)),
                    (this.$bodyEl = e("body")),
                    (this.canvas = document.createElement("canvas")),
                    (this.canvas.width = d),
                    (this.canvas.height = u),
                    this.containerEl.append(this.canvas),
                    (this.$canvas = e(this.canvas)),
                    this.$canvas.attr("id", "skillTreeMainCanvas"),
                    (this.ctx = this.canvas.getContext("2d")),
                    (this.midCanvas = document.createElement("canvas")),
                    (this.midCanvas.width = this.canvas.width),
                    (this.midCanvas.height = this.canvas.height),
                    this.containerEl.append(this.midCanvas),
                    (this.$midCanvas = e(this.midCanvas)),
                    this.$midCanvas.attr("id", "skillTreeMidCanvas"),
                    this.$midCanvas.css("pointer-events", "none"),
                    (this.midCtx = this.midCanvas.getContext("2d")),
                    (this.topCanvas = document.createElement("canvas")),
                    (this.topCanvas.width = this.canvas.width),
                    (this.topCanvas.height = this.canvas.height),
                    this.containerEl.append(this.topCanvas),
                    (this.$topCanvas = e(this.topCanvas)),
                    this.$topCanvas.attr("id", "skillTreeTopCanvas"),
                    this.$topCanvas.css("pointer-events", "none"),
                    this.$topCanvas.css("box-shadow", "inset 0px 0px 10px 10px #000"),
                    (this.topCtx = this.topCanvas.getContext("2d")),
                    (this.scaleFactor = this.canvas.height / 1600),
                    (this.fps = 0),
                    (this.frames = 0),
                    (this.debug = !1),
                    (this.groups = {}),
                    (this.nodes = {}),
                    (this.extent = new i()),
                    (this.tileSize = 512),
                    (this.tiles = []),
                    (this.finalDrawFuncs = []),
                    (this.assets = new A(this, v.sprites)),
                    (this.tree = v.tree || "Default"),
                    (this.atlas = "Atlas" === this.tree),
                    (this.characterData = v.classes || null),
                    (this.constants = v.constants),
                    (this.imageZoomLevels = v.imageZoomLevels),
                    (this.skillsPerOrbit = v.constants.skillsPerOrbit),
                    (this.orbitRadii = v.constants.orbitRadii),
                    (this.characterClassToStartNode = {}),
                    (this.ascendancyClassToStartNode = {}),
                    (this.jewelSlots = v.jewelSlots || []),
                    (this.points = v.points || null),
                    (this.readonly = !1),
                    (this.fullScreen = !1),
                    (this.errorMessage = null),
                    (this.settings = { highlightSimilarNodes: !1, highlightShortestPaths: !1 }),
                    (this.allowFullscreenKey = !0),
                    (this.buildUrl = null),
                    (this.mousePos = new s(-1, -1)),
                    (this.midDrawObjects = new a()),
                    (this.events = {
                        classChosen: function () {},
                        historyUrlSet: function (t) {},
                        buildUrlSet: function (t) {},
                        pointsChanged: new n(this),
                        onload: function () {},
                        onFullScreenUpdate: function () {},
                        onFullScreenBegin: function () {},
                        onFullScreenEnd: function () {},
                    }),
                    (this.characterAttributes = [0, 0, 0]),
                    (this.searchHighlighter = null),
                    (this.initializationComplete = e.Deferred()),
                    (this.loadCounter = 0),
                    (this.version = null),
                    (this.realm = null),
                    (this.jewelCircles = {}),
                    p &&
                        (p.events &&
                            (p.events.classChosen && (this.events.classChosen = p.events.classChosen),
                            p.events.historyUrlSet && (this.events.historyUrlSet = p.events.historyUrlSet),
                            p.events.buildUrlSet && (this.events.buildUrlSet = p.events.buildUrlSet),
                            p.events.onload && (this.events.onload = p.events.onload),
                            p.events.onFullScreenUpdate && (this.events.onFullScreenUpdate = p.events.onFullScreenUpdate),
                            p.events.onFullScreenBegin && (this.events.onFullScreenBegin = p.events.onFullScreenBegin),
                            p.events.onFullScreenEnd && (this.events.onFullScreenEnd = p.events.onFullScreenEnd)),
                        p.noFullscreenKey && (this.allowFullscreenKey = !1),
                        p.readonly && (this.readonly = !0),
                        p.buildUrl && (this.buildUrl = p.buildUrl),
                        (this.version = p.version),
                        (this.realm = p.realm)),
                    (this.passiveAllocation = new r(this)),
                    (this.passiveAllocation.passiveAllocated = function (t) {
                        (g.drawState.dirty = !0),
                            (g.drawState.topDirty = !0),
                            g.characterData &&
                                (g.stats.addAttribute(g.constants.characterAttributes.Strength, t.sa),
                                g.stats.addAttribute(g.constants.characterAttributes.Dexterity, t.da),
                                g.stats.addAttribute(g.constants.characterAttributes.Intelligence, t.ia));
                    }),
                    (this.passiveAllocation.passiveUnallocated = function (t) {
                        (g.drawState.dirty = !0),
                            (g.drawState.topDirty = !0),
                            g.characterData &&
                                (g.stats.subAttribute(g.constants.characterAttributes.Strength, t.sa),
                                g.stats.subAttribute(g.constants.characterAttributes.Dexterity, t.da),
                                g.stats.subAttribute(g.constants.characterAttributes.Intelligence, t.ia));
                    }),
                    (this.skillPoints = new x({
                        readonly: this.readonly,
                        atlas: this.atlas,
                        points: this.readonly ? 0 : this.passiveAllocation.getPassiveSkillPointsAvailable(),
                        ascendancyPoints: this.readonly ? 0 : this.passiveAllocation.getAscendancyPassiveSkillPointsAvailable(),
                    })),
                    this.events.pointsChanged.add(function () {
                        g.skillPoints && g.skillPoints.updateText(g.readonly ? 0 : g.passiveAllocation.getPassiveSkillPointsAvailable(), g.readonly ? 0 : g.passiveAllocation.getAscendancyPassiveSkillPointsAvailable());
                    }),
                    (this.jewelAllocation = new o(this)),
                    (this.stats = new l()),
                    (this.stats.statsChanged = function () {}),
                    (this.drawState = { dirty: !0, topDirty: !0, dirtyFullRedraw: !0, cancelInProgress: !1, active: !1, idle: !0, lastFrame: null }),
                    this.initLoadingRenderLoop(),
                    this.initGraph(v),
                    this.initViewPort(v, this.imageZoomLevels),
                    this.initListeners(),
                    this.initKeyListeners(),
                    this.initMouseListeners(),
                    this.initTileGrid(),
                    p && p.fullscreen && !this.fullScreen && this.toggleFullScreen(!0),
                    this.characterData)
                )
                    this.setCharacterClass(f);
                else {
                    var y = this.getNode("root");
                    y &&
                        (y.foreachOutNode(function (t) {
                            return (g.startNode = t), !1;
                        }),
                        (this.startNode.active = !0),
                        this.passiveAllocation.recalcCanAllocateSkills());
                }
                this.endLoadingRenderLoop(),
                    this.events.pointsChanged.trigger(),
                    this.events.onload(),
                    this.initRenderLoop(),
                    this.initializationComplete.resolve(),
                    (window.onpopstate = function (t) {
                        null !== t.state && g.loadStateFromUrl();
                    });
            }
            return (
                _createClass(t, [
                    {
                        key: "toggleFullScreen",
                        value: function (t) {
                            if (window.top.location != document.location) {
                                if (this.fullScreen) return;
                                this.fullScreen = !0;
                            } else this.fullScreen = !this.fullScreen;
                            this.$bodyEl.css("overflow", this.fullScreen ? "hidden" : "visible"),
                                this.updateCanvasSize(),
                                this.fullScreen
                                    ? (this.fullscreenContainerEl.append(this.canvas).append(this.midCanvas).append(this.topCanvas), this.events.onFullScreenBegin(), this.updateCanvasSize())
                                    : (this.containerEl.append(this.canvas).append(this.midCanvas).append(this.topCanvas), this.events.onFullScreenEnd()),
                                t || this.pushHistoryState();
                        },
                    },
                    {
                        key: "updateCanvasSize",
                        value: function () {
                            if (this.fullScreen) {
                                var t = this.events.onFullScreenUpdate() || { top: "0px", left: "0px", width: this.$window.width(), height: this.$window.height() };
                                this.$canvas.css("position", "fixed").css("top", t.top).css("left", t.left),
                                    this.$midCanvas.css("position", "fixed").css("top", t.top).css("left", t.left),
                                    this.$topCanvas.css("position", "fixed").css("top", t.top).css("left", t.left),
                                    (this.canvas.width = t.width),
                                    (this.canvas.height = t.height),
                                    (this.midCanvas.width = t.width),
                                    (this.midCanvas.height = t.height),
                                    (this.topCanvas.width = t.width),
                                    (this.topCanvas.height = t.height);
                            } else
                                this.$canvas.css("position", "absolute"),
                                    this.$midCanvas.css("position", "absolute"),
                                    this.$topCanvas.css("position", "absolute"),
                                    (this.canvas.width = this.initialWidth),
                                    (this.canvas.height = this.initialHeight),
                                    (this.midCanvas.width = this.initialWidth),
                                    (this.midCanvas.height = this.initialHeight),
                                    (this.topCanvas.width = this.initialWidth),
                                    (this.topCanvas.height = this.initialHeight);
                            this.forceMouseOut(), this.initTileGrid(), this.viewPort.recalcBounds(), (this.drawState.dirtyFullRedraw = !0), (this.drawState.dirty = !0), (this.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: "isHistorySupported",
                        value: function () {
                            return !(!window.history || !history.pushState);
                        },
                    },
                    {
                        key: "loadStateFromUrl",
                        value: function () {
                            var t = this,
                                e = window.location.href;
                            this.initializationComplete.done(function () {
                                if ("" != window.location.search) {
                                    var i = C.getUrlParameter("accountName"),
                                        s = C.getUrlParameter("characterName");
                                    i && s && ((t.accountName = i), (t.characterName = s)), (e = e.substring(0, e.indexOf(window.location.search)));
                                }
                                if (!t.buildUrl) {
                                    var a = e.split("/"),
                                        n = a[a.length - 1],
                                        r = a[a.length - 2],
                                        o = ["passive-skill-tree", "atlas-skill-tree", "fullscreen-passive-skill-tree", "fullscreen-atlas-skill-tree", "ruthless"];
                                    o.includes(n) || ("" === n && o.includes(r)) || t.loadHistoryUrl("" == n ? r : n);
                                }
                            });
                        },
                    },
                    {
                        key: "loadBaseCharacterAttributes",
                        value: function () {
                            this.stats.setAttribute(this.constants.characterAttributes.Strength, this.characterData[this.characterClass].base_str),
                                this.stats.setAttribute(this.constants.characterAttributes.Dexterity, this.characterData[this.characterClass].base_dex),
                                this.stats.setAttribute(this.constants.characterAttributes.Intelligence, this.characterData[this.characterClass].base_int);
                        },
                    },
                    {
                        key: "pushHistoryState",
                        value: function () {
                            if (this.isHistorySupported()) {
                                var t = this.getHistoryUrl();
                                window.history.pushState(null, "", t), this.events.historyUrlSet(t);
                            }
                        },
                    },
                    {
                        key: "fullRedraw",
                        value: function () {
                            (this.drawState.dirty = !0), (this.drawState.dirtyFullRedraw = !0);
                        },
                    },
                    {
                        key: "reset",
                        value: function (t) {
                            this.passiveAllocation.reset();
                            var e = !1;
                            t && t.characterClass >= 0 && this.setCharacterClass(t.characterClass, t.ascendancyClass),
                                t && void 0 !== _typeof(t.accountName) && ((this.accountName = t.accountName), (e = !0)),
                                t && void 0 !== _typeof(t.characterName) && ((this.characterName = t.characterName), (e = !0)),
                                this.lastQuery && "" != this.lastQuery && this.highlightSearchQuery(this.lastQuery),
                                this.pushHistoryState(),
                                e && this.jewelAllocation.unLoadJewels(),
                                this.fullRedraw();
                        },
                    },
                    {
                        key: "setCharacterClass",
                        value: function (t, e) {
                            (this.characterClass = t),
                                this.setAscendancyClass(e || 0),
                                this.startNode && ((this.startNode.active = !1), this.passiveAllocation.recalcCanAllocateSkills()),
                                this.ascendancyStartNode && (this.ascendancyStartNode.active = !1),
                                (this.startNode = this.characterClassToStartNode[t]),
                                (this.startNode.active = !0),
                                this.ascendancyClassName && ((this.ascendancyStartNode = this.ascendancyClassToStartNode[this.ascendancyClassName]), this.ascendancyStartNode && (this.ascendancyStartNode.active = !0)),
                                this.viewPort.setPosition(this.getNodePositionInfo(this.startNode).position),
                                this.passiveAllocation.recalcCanAllocateSkills(),
                                this.events.classChosen(this.characterClass, this.ascendancyClass);
                        },
                    },
                    {
                        key: "setAscendancyClass",
                        value: function (t) {
                            if (this.characterClass >= 0 && t > 0) {
                                var e = this.ascendancyClasses[this.characterClass].ascendancies[t - 1] || null;
                                if (e) return (this.ascendancyClass = t), void (this.ascendancyClassName = e.id);
                            }
                            (this.ascendancyClassPopupHidden = !0), (this.ascendancyClass = null), (this.ascendancyClassName = null);
                        },
                    },
                    {
                        key: "loadCharacterData",
                        value: function (t, e, i, s, a) {
                            this.passiveAllocation.reset(), this.setCharacterClass(t, e), this.passiveAllocation.loadHashArray(i, s, a), this.jewelAllocation.loadJewels(), this.events.historyUrlSet(this.getHistoryUrl()), this.fullRedraw();
                        },
                    },
                    {
                        key: "drawArc",
                        value: function (t, e, i, s, a, n, r) {
                            var o = a - s,
                                l = o / (Math.PI / 2),
                                h = o;
                            t.save(), t.translate(Math.round(i.x), Math.round(i.y)), t.scale(r, r), t.rotate(s - Math.PI);
                            var c = e.width + Math.round(("Active" === n ? 0 : 16) * this.viewPort.zoom),
                                d = e.width - Math.round(("Active" === n ? 44 : 28) * this.viewPort.zoom);
                            t.beginPath(), t.arc(0, 0, c, 0, 2 * Math.PI, !1), t.arc(0, 0, d, 0, 2 * Math.PI, !0), t.closePath(), t.clip();
                            for (var u = 0, f = Math.ceil(l); u < f; ++u)
                                h < Math.PI / 2
                                    ? (t.save(),
                                      t.beginPath(),
                                      t.moveTo(0, 0),
                                      t.arc(0, 0, c, Math.PI, h + Math.PI, !1),
                                      t.moveTo(0, 0),
                                      t.clip(),
                                      t.drawImage(e, e.coords.x, e.coords.y, e.width, e.height, -e.width, -e.height, e.width, e.height),
                                      t.restore())
                                    : (t.drawImage(e, e.coords.x, e.coords.y, e.width, e.height, -e.width, -e.height, e.width, e.height), t.rotate(Math.PI / 2), (h -= Math.PI / 2));
                            t.restore();
                        },
                    },
                    {
                        key: "drawStraightPath",
                        value: function (t, e, i, s, a) {
                            for (
                                var n = function (t, e, i) {
                                        return (1 - t) * e.x + t * i.x;
                                    },
                                    r = function (t, e, i) {
                                        return (1 - t) * e.y + t * i.y;
                                    },
                                    o = i.distTo(s),
                                    l = e.width * a,
                                    h = o,
                                    c = o / l,
                                    d = 1 / c,
                                    u = i.angleTo(s),
                                    f = 0,
                                    v = 0,
                                    p = Math.ceil(c);
                                v < p;
                                ++v
                            ) {
                                var g = e.width;
                                h < l && (g = Math.round((g * h) / l)),
                                    t.save(),
                                    t.translate(Math.round(n(f, i, s)), Math.round(r(f, i, s))),
                                    t.scale(a, a),
                                    t.rotate(u),
                                    t.drawImage(e, e.coords.x, e.coords.y, g, e.height, 0, Math.round(-e.height / 2), g, e.height),
                                    t.restore(),
                                    (f += d),
                                    (h -= l);
                            }
                        },
                    },
                    {
                        key: "loadWaitAsset",
                        value: function (t) {
                            return new Promise(function (e) {
                                (t.onload = function () {
                                    e();
                                }),
                                    (t.onerror = function () {
                                        dfd.resolve();
                                    }),
                                    (t.src = t._src);
                            });
                        },
                    },
                    {
                        key: "endLoadingRenderLoop",
                        value: function () {
                            window.cancelAnimationFrame(this.loadingRenderLoopIntervalId);
                        },
                    },
                    {
                        key: "initLoadingRenderLoop",
                        value: function () {
                            var t = this.loadCounter,
                                e = this;
                            this.loadingRenderLoopIntervalId = window.requestAnimationFrame(function i() {
                                var s = 0 == t ? 1 : (t - e.loadCounter) / t;
                                e.drawLoading(s), (e.loadingRenderLoopIntervalId = window.requestAnimationFrame(i));
                            });
                        },
                    },
                    {
                        key: "initRenderLoop",
                        value: function () {
                            var t = this;
                            setInterval(function () {
                                (t.fps = t.frames), (t.frames = 0);
                            }, 1e3);
                            var e = this;
                            window.requestAnimationFrame(function t() {
                                e.draw(), e.frames++, window.requestAnimationFrame(t);
                            });
                        },
                    },
                    {
                        key: "initGraph",
                        value: function (t) {
                            var e = this,
                                i = t.nodes.root;
                            (this.rootNode = new h("root", i)),
                                Object.keys(t.nodes).forEach(function (i) {
                                    var s = new h(i, t.nodes[i]);
                                    e.addNode(i, s), s.isClassStartNode() && (e.characterClassToStartNode[s.classStartIndex] = s), s.isAscendancyStartNode && (e.ascendancyClassToStartNode[s.ascendancyName] = s);
                                }),
                                Object.keys(t.groups).forEach(function (i) {
                                    var a = t.groups[i],
                                        n = new c(i, new s(a.x, a.y), a.isProxy, a.background);
                                    a.nodes.forEach(function (t) {
                                        var i = e.getNode(t);
                                        i.ascendancyName && ((n.isAscendancy = !0), (n.ascendancyName = i.ascendancyName)), n.addNode(t, i);
                                    }),
                                        e.addGroup(n);
                                }),
                                Object.keys(t.nodes).forEach(function (i) {
                                    var s = e.getNode(i),
                                        a = t.nodes[i];
                                    a.out &&
                                        a.out.length &&
                                        a.out.forEach(function (t) {
                                            var i = e.getNode(t);
                                            (s.group && i.group && s.group !== i.group && s.group.isExpansion() !== i.group.isExpansion()) || s.addOutNode(i);
                                        });
                                });
                        },
                    },
                    {
                        key: "getShortestPathsFromActiveNodes",
                        value: function (t) {
                            var e = this,
                                i = -1,
                                s = [],
                                a = function (a) {
                                    e.visitBFS(
                                        a,
                                        function (e) {
                                            return e === t;
                                        },
                                        function (t) {
                                            return !e.passiveAllocation.isAllocated(t) && !t.isClassStartNode() && !t.isAscendancy;
                                        },
                                        function (t, e) {
                                            s.push({ goalNodeData: t, nodeRelationshipData: e }), (-1 == i || t.depth < i) && (i = t.depth);
                                            for (var a = s.length - 1; a >= 0; --a) s[a].goalNodeData.depth > i && s.splice(a, 1);
                                        }
                                    );
                                };
                            return a(this.startNode), this.passiveAllocation.foreachAllocatedSkill(a), s;
                        },
                    },
                    {
                        key: "recalculateExtent",
                        value: function () {
                            this.extent = this.defaultExtent.clone();
                            var t = this.canvas.width / this.viewPort.zoom,
                                e = this.canvas.height / this.viewPort.zoom;
                            this.extent.width() < t && this.extent.width(t), this.extent.height() < e && this.extent.height(e), this.atlas ? this.extent.horizontalCenterAt(new s()) : this.extent.centerAt(new s());
                        },
                    },
                    {
                        key: "initTileGrid",
                        value: function () {
                            (this.grid = {}),
                                (this.grid.xTiles = Math.ceil((this.extent.width() * this.viewPort.zoom) / this.tileSize) + 1),
                                (this.grid.yTiles = Math.ceil((this.extent.height() * this.viewPort.zoom) / this.tileSize) + 1),
                                (this.grid.tiles = []);
                            for (var t = 0; t < this.grid.yTiles; ++t) {
                                this.grid.tiles[t] = [];
                                for (var e = 0; e < this.grid.xTiles; ++e) this.grid.tiles[t][e] = new d();
                            }
                        },
                    },
                    {
                        key: "calcTileGrid",
                        value: function () {
                            (this.grid.lExtentToLVisGridOffsetPx = Math.max(this.viewPort.bounds.tl.x - this.extent.tl.x, 0) * this.viewPort.zoom),
                                (this.grid.tExtentToTVisGridOffsetPx = Math.max(this.viewPort.bounds.tl.y - this.extent.tl.y, 0) * this.viewPort.zoom),
                                (this.grid.lExtentToRVisGridOffsetPx = Math.max(this.viewPort.bounds.br.x - this.extent.tl.x, 0) * this.viewPort.zoom),
                                (this.grid.tExtentToBVisGridOffsetPx = Math.max(this.viewPort.bounds.br.y - this.extent.tl.y, 0) * this.viewPort.zoom),
                                (this.grid.lExtentToLVisGridOffsetTiles = this.grid.lExtentToLVisGridOffsetPx / this.tileSize),
                                (this.grid.tExtentToTVisGridOffsetTiles = this.grid.tExtentToTVisGridOffsetPx / this.tileSize),
                                (this.grid.lExtentToRVisGridOffsetTiles = this.grid.lExtentToRVisGridOffsetPx / this.tileSize),
                                (this.grid.tExtentToBVisGridOffsetTiles = this.grid.tExtentToBVisGridOffsetPx / this.tileSize),
                                (this.grid.visGridWidthTiles = this.grid.lExtentToRVisGridOffsetTiles - this.grid.lExtentToLVisGridOffsetTiles),
                                (this.grid.visGridHeightTiles = this.grid.tExtentToBVisGridOffsetTiles - this.grid.tExtentToTVisGridOffsetTiles),
                                (this.grid.visGridStartXTilePos = Math.floor(this.grid.lExtentToLVisGridOffsetTiles)),
                                (this.grid.visGridStartYTilePos = Math.floor(this.grid.tExtentToTVisGridOffsetTiles)),
                                (this.grid.visGridXTileviewPortShift = this.grid.lExtentToLVisGridOffsetTiles - this.grid.visGridStartXTilePos),
                                (this.grid.visGridYTileviewPortShift = this.grid.tExtentToTVisGridOffsetTiles - this.grid.visGridStartYTilePos),
                                (this.grid.drawTileW = Math.ceil(this.grid.visGridWidthTiles) + Math.ceil(this.grid.visGridXTileviewPortShift)),
                                (this.grid.drawTileH = Math.ceil(this.grid.visGridHeightTiles) + Math.ceil(this.grid.visGridYTileviewPortShift)),
                                (this.grid.visGridXviewPortShift = this.grid.visGridXTileviewPortShift * this.tileSize),
                                (this.grid.visGridYviewPortShift = this.grid.visGridYTileviewPortShift * this.tileSize);
                        },
                    },
                    {
                        key: "initViewPort",
                        value: function (t) {
                            (this.viewPort = { skillTree: this, position: new s(), bounds: new i(), moveStartView: null, moveStartWorld: null, zoomLevels: this.imageZoomLevels, zoomIndex: 0, zoom: this.imageZoomLevels[0] }),
                                (this.viewPort.zoomIn = function () {
                                    this.zoomIndex != this.zoomLevels.length - 1 && (++this.zoomIndex, (this.zoom = this.zoomLevels[this.zoomIndex]), this.recalcBounds());
                                }),
                                (this.viewPort.zoomOut = function () {
                                    this.zoomIndex <= 0 || (--this.zoomIndex, (this.zoom = this.zoomLevels[this.zoomIndex]), this.recalcBounds());
                                }),
                                (this.viewPort.recalcBounds = function () {
                                    var t = !1;
                                    this.skillTree.recalculateExtent(),
                                        this.bounds.width(this.skillTree.canvas.width / this.zoom),
                                        this.bounds.height(this.skillTree.canvas.height / this.zoom),
                                        this.bounds.centerAt(this.position),
                                        this.bounds.br.x > this.skillTree.extent.br.x && ((this.position.x = this.skillTree.extent.br.x - this.bounds.width() / 2), (t = !0)),
                                        this.bounds.br.y > this.skillTree.extent.br.y && ((this.position.y = this.skillTree.extent.br.y - this.bounds.height() / 2), (t = !0)),
                                        this.bounds.tl.x < this.skillTree.extent.tl.x && ((this.position.x = this.skillTree.extent.tl.x + this.bounds.width() / 2), (t = !0)),
                                        this.bounds.tl.y < this.skillTree.extent.tl.y && ((this.position.y = this.skillTree.extent.tl.y + this.bounds.height() / 2), (t = !0)),
                                        t && this.bounds.centerAt(this.position);
                                }),
                                (this.viewPort.beginMove = function (t, e) {
                                    (this.moveStartView = new s(t, e)), (this.moveStartWorld = this.position.clone());
                                }),
                                (this.viewPort.endMove = function () {
                                    (this.moveStartView = null), (this.moveStartWorld = null);
                                }),
                                (this.viewPort.updateMove = function (t, e) {
                                    return (
                                        null !== this.moveStartView &&
                                        (this.moveStartView.x != t || this.moveStartView.y != e) &&
                                        ((this.position = this.moveStartWorld.clone()),
                                        this.position.translateX((this.moveStartView.x - t) / this.zoom),
                                        this.position.translateY((this.moveStartView.y - e) / this.zoom),
                                        this.recalcBounds(),
                                        !0)
                                    );
                                }),
                                (this.viewPort.setPosition = function (t) {
                                    (this.position = t), this.recalcBounds();
                                }),
                                (this.extent.tl.x = t.min_x),
                                (this.extent.tl.y = t.min_y),
                                (this.extent.br.x = t.max_x),
                                (this.extent.br.y = t.max_y),
                                this.extent.grow(2 * this.getOrbitRadius(4) + 900),
                                (this.defaultExtent = this.extent.clone()),
                                this.viewPort.recalcBounds();
                        },
                    },
                    {
                        key: "initListeners",
                        value: function () {
                            var t = this;
                            this.$window.resize(function () {
                                t.fullScreen && t.updateCanvasSize();
                            });
                        },
                    },
                    {
                        key: "initKeyListeners",
                        value: function () {
                            var t = this;
                            this.$window.keypress(function (e) {
                                switch (e.which) {
                                    case 61:
                                        t.viewPort.zoomIn(), t.initTileGrid(), (t.drawState.dirty = !0), t.trigMouseMoveHandler();
                                        break;
                                    case 45:
                                        t.viewPort.zoomOut(), t.initTileGrid(), (t.drawState.dirty = !0), t.trigMouseMoveHandler();
                                        break;
                                    case 102:
                                        t.allowFullscreenKey && t.toggleFullScreen();
                                        break;
                                    case 100:
                                        (t.debug = !t.debug), (t.drawState.topDirty = !0);
                                }
                            });
                        },
                    },
                    {
                        key: "clickHandler",
                        value: function (t, e) {
                            var i = this.$canvas.offset(),
                                s = { x: t, y: e, viewport: { x: i.left, y: i.top, width: this.canvas.width, height: this.canvas.height }, worldPosition: this.getScreenWorldPosition(t, e) };
                            this.foreachClickable(function (t) {
                                return t.onclickTest(s);
                            });
                        },
                    },
                    {
                        key: "trigMouseMoveHandler",
                        value: function () {
                            this.mouseMoveHandler(this.mousePos.x, this.mousePos.y);
                        },
                    },
                    {
                        key: "mouseLeaveHander",
                        value: function () {
                            this.mouseUpHandler();
                        },
                    },
                    {
                        key: "mouseUpHandler",
                        value: function () {
                            this.viewPort.endMove(), (this.drawState.dirty = !0);
                        },
                    },
                    {
                        key: "mouseMoveHandler",
                        value: function (t, e) {
                            var i = this.$canvas.offset(),
                                s = { x: t, y: e, viewport: { x: i.left, y: i.top, width: this.canvas.width, height: this.canvas.height }, worldPosition: this.getScreenWorldPosition(t, e) };
                            this.foreachClickable(function (t) {
                                t.onmousemoveTest(s), t.onmouseoutTest(s);
                            });
                        },
                    },
                    {
                        key: "forceMouseOut",
                        value: function () {
                            this.foreachClickable(function (t) {
                                return t.forceMouseOut();
                            });
                        },
                    },
                    {
                        key: "foreachVisibleGridTile",
                        value: function (t) {
                            for (var e = 0; e < this.grid.drawTileH; ++e)
                                for (var i = 0; i < this.grid.drawTileW; ++i) {
                                    var s = i + this.grid.visGridStartXTilePos,
                                        a = e + this.grid.visGridStartYTilePos;
                                    if (!(s >= this.grid.xTiles || a >= this.grid.yTiles) && !0 === t.call(this, this.grid.tiles[a][s], s, a, i, e)) return;
                                }
                        },
                    },
                    {
                        key: "initMouseListeners",
                        value: function () {
                            var t = this;
                            this.$canvas.mousedown(function (e) {
                                if (3 !== e.which) {
                                    var i = t.$canvas.offset();
                                    e.preventDefault(), t.viewPort.beginMove(e.pageX, e.pageY), t.clickHandler(e.pageX - i.left, e.pageY - i.top);
                                }
                            }),
                                this.$canvas.mouseup(function (e) {
                                    3 !== e.which && t.mouseUpHandler();
                                }),
                                this.$canvas.mousemove(function (e) {
                                    var i = t.$canvas.offset();
                                    (t.mousePos.x = e.pageX - i.left), (t.mousePos.y = e.pageY - i.top), t.trigMouseMoveHandler(), t.viewPort.updateMove(e.pageX, e.pageY) && (t.drawState.dirty = !0);
                                }),
                                this.$canvas.mouseout(function () {
                                    t.mouseLeaveHander(), t.forceMouseOut();
                                }),
                                e(this.$canvas).bind("mousewheel", function (e, i) {
                                    for (var s = 0; s < i; ++s) t.viewPort.zoomIn();
                                    for (s = 0; s > i; --s) t.viewPort.zoomOut();
                                    return t.initTileGrid(), t.trigMouseMoveHandler(), (t.drawState.dirty = !0), !1;
                                });
                        },
                    },
                    {
                        key: "drawDebug",
                        value: function () {
                            (this.topCtx.fillStyle = "rgb(20,200,20)"),
                                (this.topCtx.font = "10pt Arial"),
                                this.topCtx.fillText("Zoom: " + this.viewPort.zoom, 10, 30),
                                this.topCtx.fillText("FPS: " + this.fps, 10, 60),
                                (this.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: "drawDebugGridInfo",
                        value: function () {
                            (this.topCtx.fillStyle = "rgb(20,200,20)"), (this.topCtx.font = "10pt Arial");
                            var t = 60;
                            this.topCtx.fillText(
                                "Visible grid | Tile W: " +
                                    Number(this.grid.visGridWidthTiles).toFixed(2) +
                                    ", Tile H: " +
                                    Number(this.grid.visGridWidthTiles).toFixed(2) +
                                    ", XS: " +
                                    Number(this.grid.visGridXviewPortShift).toFixed(2) +
                                    ", YS: " +
                                    Number(this.grid.visGridYviewPortShift).toFixed(2),
                                10,
                                (t += 30)
                            ),
                                this.topCtx.fillText("Visible grid | Start X Tile: " + this.grid.visGridStartXTilePos + ", Start Y Tile: " + this.grid.visGridStartYTilePos, 10, (t += 30)),
                                this.topCtx.fillText("Draw grid | W: " + this.grid.drawTileW + ", H: " + this.grid.drawTileH, 10, (t += 30)),
                                this.topCtx.fillText("Grid | W: " + this.grid.tiles[0].length + ", H: " + this.grid.tiles.length, 10, (t += 30)),
                                (this.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: "getCurrentImageZoomLevel",
                        value: function () {
                            for (var t = this.imageZoomLevels.length, e = 0; e < t; ++e) if (this.viewPort.zoom <= this.imageZoomLevels[e]) return this.imageZoomLevels[e];
                            return this.imageZoomLevels[t - 1];
                        },
                    },
                    {
                        key: "drawTile",
                        value: function (t, e, a) {
                            var n = this;
                            if (!t.dirty && !this.drawState.dirtyFullRedraw) return !1;
                            null === t.canvas && ((t.canvas = document.createElement("canvas")), (t.canvas.width = this.tileSize), (t.canvas.height = this.tileSize));
                            var r = t.canvas,
                                o = r.getContext("2d"),
                                l = (r.width, r.height, this.getCurrentImageZoomLevel()),
                                h = a / l,
                                c = new i();
                            (c.tl.x = e.x), (c.tl.y = e.y), c.width(r.width / a), c.height(r.height / a);
                            var d = c.clone();
                            if ((d.grow(2 * this.getOrbitRadius(4) + 900), this.drawBackgroundTile(o, e, l, h), "Royale" === this.tree)) {
                                var u = new s(0, 3);
                                if (d.contains(u)) {
                                    var f = u.clone();
                                    f.inverseTranslate(c.tl), f.scale(a);
                                    var v = (k = (w = this.assets.get("royale", "RoyalePassiveCentrePiece", l)).width * h * 1.165) / 2,
                                        p = (m = w.height * h * 1.165) / 2;
                                    o.drawImage(w, w.coords.x, w.coords.y, w.width, w.height, Math.round(f.x - v), Math.round(f.y - p), Math.round(k), Math.round(m));
                                }
                                ["RoyalePassiveMelee", "RoyalePassiveProjectiles", "RoyalePassiveCritDamageOverTime", "RoyalePassiveSpells", "RoyalePassiveElementalDamage", "RoyalePassivePhysicalDamage"].forEach(function (t, e) {
                                    var i = ((2 * Math.PI) / 6) * e,
                                        s = u.clone();
                                    if (((s.x += 2e3 * Math.sin(i)), (s.y += 2e3 * Math.cos(i)), d.contains(s))) {
                                        s.inverseTranslate(c.tl), s.scale(a);
                                        var r = n.assets.get("royale", t, l),
                                            f = r.width * h * 1.2,
                                            v = r.height * h * 1.2,
                                            p = f / 2,
                                            g = v / 2;
                                        o.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, Math.round(s.x - p), Math.round(s.y - g), Math.round(f), Math.round(v));
                                    }
                                });
                            } else if (this.atlas) {
                                var g = Math.round((this.extent.tl.y - this.extent.br.y) / 2.95),
                                    y = new s(-60, g);
                                y.inverseTranslate(c.tl), y.scale(a);
                                var w, k, m;
                                (v = (k = 2.8173 * (w = this.assets.get("atlasBackground", "AtlasPassiveBackground", l)).width) / 2), (p = (m = 2.8173 * w.height) / 2);
                                o.drawImage(w, w.coords.x, w.coords.y, w.width, w.height, Math.round(y.x - v), Math.round(y.y - p), Math.round(k), Math.round(m));
                            }
                            this.foreachGroup(function (t) {
                                if (d.contains(t.position) && !t.isAscendancy) {
                                    var e = t.position.clone();
                                    e.inverseTranslate(c.tl),
                                        e.scale(a),
                                        n.drawGroupBackground(o, t, e, a, l, h),
                                        "Default" === n.tree &&
                                            t.foreachNode(function (t) {
                                                if (t.isClassStartNode()) {
                                                    var e = n.getNodePositionInfo(t).position;
                                                    e.inverseTranslate(c.tl), e.scale(a), n.drawStartNodeBackground(o, e, l, h, t.classStartIndex);
                                                }
                                            });
                                }
                            });
                            var P = this.ascendancyStartNode.group;
                            if (P && this.isAscendancyGroupEnabled(P)) {
                                var S = this.getAscendancyPositionInfo();
                                P.oldPos || (P.oldPos = P.position.clone()), (P.position = new s(S.classArtImgPoint.x, S.classArtImgPoint.y));
                            }
                            return (
                                this.foreachGroup(function (t) {
                                    if (!n.isAscendancyGroupEnabled(t) || t.id == P.id || t.oldPos) t.isAscendancy || n.drawGroupNodePaths(t, o, c, d);
                                    else {
                                        t.oldPos = t.position.clone();
                                        var e = new s(P.position.x - P.oldPos.x, P.position.y - P.oldPos.y);
                                        t.position = new s(t.oldPos.x + e.x, t.oldPos.y + e.y);
                                    }
                                }),
                                this.foreachGroup(function (t) {
                                    d.contains(t.position) &&
                                        (t.isAscendancy ||
                                            n.drawGroupNodes(t, o, a, l, h, c, function (t) {
                                                return !t.isAscendancy;
                                            }));
                                }),
                                this.drawCircles(o),
                                this.drawAscendancyClassBackground(o, c),
                                this.drawAscendancyClassText(o, c),
                                this.drawStartNodeAscendancyButton(o, c),
                                this.foreachGroup(function (t) {
                                    n.isAscendancyGroupEnabled(t) && n.drawGroupNodePaths(t, o, c, d);
                                }),
                                this.foreachGroup(function (t) {
                                    n.isAscendancyGroupEnabled(t) &&
                                        n.drawGroupNodes(t, o, a, l, h, c, function (e) {
                                            return n.isAscendancyGroupEnabled(t);
                                        });
                                }),
                                (t.dirty = !1),
                                !0
                            );
                        },
                    },
                    {
                        key: "drawGroupNodes",
                        value: function (t, i, a, n, r, o, l) {
                            var h = this;
                            t.foreachNode(function (c) {
                                if (l(c)) {
                                    var d = h.getNodePositionInfo(c, t),
                                        y = d.position.clone(),
                                        w = d.position;
                                    if ((w.inverseTranslate(o.tl), w.scale(a), void 0 === c.classStartIndex))
                                        if (h.atlas && c === h.startNode) {
                                            var k = h.getNodePositionInfo(c).position;
                                            k.inverseTranslate(o.tl), k.scale(a);
                                            var m = h.assets.get("startNode", "AtlasPassiveSkillScreenStart", n),
                                                P = m.width * r,
                                                S = m.height * r,
                                                C = P / 2,
                                                b = S / 2;
                                            i.drawImage(m, m.coords.x, m.coords.y, m.width, m.height, Math.round(k.x - C), Math.round(k.y - b), Math.round(P), Math.round(S));
                                        } else {
                                            var T = null,
                                                x = c.skill ? c.skill.icon : null;
                                            if (c.isMastery()) {
                                                if (((T = "mastery"), c.masteryData))
                                                    if (c.active) (T = "masteryActiveSelected"), (x = c.masteryData.activeIcon);
                                                    else {
                                                        var A = !1;
                                                        for (var N in c.inNodes) {
                                                            if (c.inNodes[N].active) {
                                                                A = !0;
                                                                break;
                                                            }
                                                        }
                                                        if (((T = "mastery".concat(A ? "Connected" : "Inactive")), (x = c.masteryData.inactiveIcon), A)) {
                                                            var E = h.assets.get("masteryActiveSelected", "PassiveMasteryConnectedButton", n);
                                                            if (E) {
                                                                var M = (R = E.width * r) / 2;
                                                                (R = Math.round(R)), i.drawImage(E, E.coords.x, E.coords.y, E.width, E.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                            }
                                                        }
                                                    }
                                            } else
                                                T = c.notable
                                                    ? "notable" + (c.active ? "Active" : "Inactive")
                                                    : c.isKeystone()
                                                    ? "keystone" + (c.active ? "Active" : "Inactive")
                                                    : c.skill.isJewel() || c.isAscendancyStartNode
                                                    ? null
                                                    : "normal" + (c.active ? "Active" : "Inactive");
                                            if (T && x) {
                                                var I = h.assets.get(T, x, n);
                                                if (I) {
                                                    var O = I.width * r,
                                                        H = O / 2;
                                                    (O = Math.round(O)), i.drawImage(I, I.coords.x, I.coords.y, I.width, I.height, Math.round(w.x - H), Math.round(w.y - H), O, O);
                                                }
                                            }
                                            if (!c.isMastery()) {
                                                var D = null;
                                                if (c.isKeystone()) D = h.assets.get("frame", "KeystoneFrame" + (c.active ? "Allocated" : c.canAllocate ? "CanAllocate" : "Unallocated"), n);
                                                else if (c.notable)
                                                    D = c.isAscendancy
                                                        ? h.assets.get("ascendancy", "AscendancyFrameLarge" + (c.active ? "Allocated" : c.canAllocate ? "CanAllocate" : "Normal"), n)
                                                        : c.isBlightedNode
                                                        ? h.assets.get("frame", "BlightedNotableFrame" + (c.active ? "Allocated" : c.canAllocate ? "CanAllocate" : "Unallocated"), n)
                                                        : h.assets.get("frame", "NotableFrame" + (c.active ? "Allocated" : c.canAllocate ? "CanAllocate" : "Unallocated"), n);
                                                else if (c.isAscendancyStartNode) D = h.assets.get("ascendancy", "AscendancyMiddle", n);
                                                else if (c.isAscendancy) D = h.assets.get("ascendancy", "AscendancyFrameSmall" + (c.active ? "Allocated" : c.canAllocate ? "CanAllocate" : "Normal"), n);
                                                else if (c.isClusterJewel) {
                                                    var G = "JewelSocketAlt";
                                                    c.canAllocate ? (G += "CanAllocate") : c.active ? (G += "Active") : (G += "Normal"), (D = h.assets.get("frame", G, n));
                                                } else if (c.isJewel) {
                                                    G = "JewelFrame";
                                                    c.canAllocate ? (G += "CanAllocate") : c.active ? (G += "Allocated") : (G += "Unallocated"), (D = h.assets.get("frame", G, n));
                                                } else
                                                    D = c.active
                                                        ? h.assets.get("frame", "PSSkillFrameActive", n)
                                                        : c.canAllocate
                                                        ? h.assets.get("frame", "PSSkillFrameHighlighted", n)
                                                        : h.assets.get("frame", "PSSkillFrame" + (c.active ? "Active" : ""), n);
                                                if (D) {
                                                    M = (R = D.width * r) / 2;
                                                    (R = Math.round(R)), i.drawImage(D, D.coords.x, D.coords.y, D.width, D.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                }
                                            }
                                            if (c.isClusterJewel && !c.skill.isJewel()) {
                                                var B = "JewelSocketClusterAlt";
                                                switch (((B += c.canAllocate || c.active ? "CanAllocate" : "Normal"), (B += "1"), c.clusterJewelSize)) {
                                                    default:
                                                    case 0:
                                                        B += "Small";
                                                        break;
                                                    case 1:
                                                        B += "Medium";
                                                        break;
                                                    case 2:
                                                        B += "Large";
                                                }
                                                var F = h.assets.get("frame", B, n);
                                                if (F) {
                                                    M = (R = F.width * r) / 2;
                                                    (R = Math.round(R)), i.drawImage(F, F.coords.x, F.coords.y, F.width, F.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                }
                                            }
                                            if (c.isJewel && c.skill.isJewel()) {
                                                var $ = c.skill.jewel,
                                                    L = (function (t, e) {
                                                        var i = "JewelSocketActive";
                                                        if (0 == e.type.indexOf("JewelAbyss")) i += "Abyss";
                                                        else if ("JewelTimeless" == e.type) i += "Legion";
                                                        else if ("JewelInt" == e.type) i += "Blue";
                                                        else if ("JewelDex" == e.type) i += "Green";
                                                        else if ("JewelPrismatic" == e.type) i += "Prismatic";
                                                        else {
                                                            if ("JewelStr" != e.type)
                                                                return "JewelPassiveTreeExpansionSmall" == e.type
                                                                    ? i + "AltRed"
                                                                    : "JewelPassiveTreeExpansionMedium" == e.type
                                                                    ? i + "AltBlue"
                                                                    : "JewelPassiveTreeExpansionLarge" == e.type
                                                                    ? i + "AltPurple"
                                                                    : null;
                                                            i += "Red";
                                                        }
                                                        return t.isClusterJewel && (i += "Alt"), i;
                                                    })(c, $);
                                                if (L) {
                                                    var z = h.assets.get("jewel", L, n);
                                                    if (z) {
                                                        var R;
                                                        M = (R = z.width * r) / 2;
                                                        (R = Math.round(R)), i.drawImage(z, z.coords.x, z.coords.y, z.width, z.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                    }
                                                    if ($.radius) {
                                                        var _ = 2 * $.radius * n,
                                                            j = $.radiusMin ? 1.075 * $.radiusMin * 2 * n : null;
                                                        if (_) {
                                                            var U = { x: Math.round(w.x), y: Math.round(w.y), visual: $.radiusVisual, width: _, innerWidth: j };
                                                            h.jewelCircles[c.skill.hash] = U;
                                                        }
                                                    }
                                                }
                                            }
                                            if (null === c.clickable) {
                                                var J = h.getNodeRadius(c),
                                                    V = new u(y, J);
                                                (c.clickable = V),
                                                    (V.onclick = function (t) {
                                                        if (nodeClickCallback) {
                                                            nodeClickCallback(c.id);
                                                        }
                                                        (h.drawState.dirty = !0), (h.drawState.dirtyFullRedraw = !0);
                                                        var i = !1;
                                                        if (c.active) h.passiveAllocation.unallocate(c.skill.getHash()) && ((i = !0), c.isMastery() && c.popup && c.popup.render());
                                                        else if (c.isMastery() && c.similarNodeHighlighter && h.atlas)
                                                            c.similarNodeHighlighter.foreachHighlighter(function (t) {
                                                                t.atlasMasteryOverlay = !t.atlasMasteryOverlay;
                                                            });
                                                        else if (c.isMastery() && h.passiveAllocation.canAllocate(c))
                                                            if ((c.popup && !c.popup.editable && (c.popup.destroy(), (c.popup = null)), c.popup))
                                                                c.popup.handleMouseout(t), c.popup.destroy(), (c.popup = null), (c.popup = new p(c.masteryData, h.passiveAllocation, !1)), c.popup.handleMouseover(t);
                                                            else {
                                                                c.popup = new p(c.masteryData, h.passiveAllocation, !0);
                                                                var a = h.worldToScreen(new s(V.point.x - V.radius, V.point.y));
                                                                (t.x = a.x),
                                                                    (t.y = a.y),
                                                                    c.popup.handleMouseClick(t),
                                                                    e(c.popup).on("allocateMastery", function (t, e, i) {
                                                                        h.passiveAllocation.allocate(e, i), c.popup.handleMouseout(), c.popup.destroy(), (c.popup = null), (h.drawState.dirty = !0), (h.drawState.dirtyFullRedraw = !0);
                                                                    });
                                                            }
                                                        else h.passiveAllocation.allocate(c.skill.getHash()) && (i = !0);
                                                        if (i && h.settings.highlightShortestPaths && null !== c.pathHighlighterGroup) {
                                                            c.pathHighlighterGroup.end();
                                                            var n = h.getShortestPathsFromActiveNodes(c);
                                                            (c.pathHighlighterGroup = new f(h, n)), c.pathHighlighterGroup.begin();
                                                        }
                                                    }),
                                                    (V.onmousemove = function (t) {
                                                        if (
                                                            ((h.drawState.dirty = !0),
                                                            (c.renderState.hover = !0),
                                                            c.skill.isJewel()
                                                                ? c.skill.item.handleItemMouseover(t)
                                                                : c.popup
                                                                ? c.popup.editable || c.popup.handleMouseover(t)
                                                                : c.isMastery()
                                                                ? h.atlas && c.skill
                                                                    ? ((c.popup = new p(new g({ name: c.skill.displayName, skill: c.skill.hash, atlas: !0 }), h.passiveAllocation, !1)), c.popup.handleMouseover(t))
                                                                    : c.masteryData && ((c.popup = new p(c.masteryData, h.passiveAllocation, !1)), c.popup.handleMouseover(t))
                                                                : c.skill && ((c.popup = new v(c.skill)), c.popup.handleMouseover(t), h.settings.highlightSimilarNodes && h.highlightSimilarNodes(c)),
                                                            h.settings.highlightShortestPaths && null === c.pathHighlighterGroup)
                                                        ) {
                                                            var e = h.getShortestPathsFromActiveNodes(c);
                                                            (c.pathHighlighterGroup = new f(h, e)), c.pathHighlighterGroup.begin();
                                                        }
                                                        c.isMastery() && null === c.similarNodeHighlighter && h.highlightSimilarMasteries(c);
                                                    }),
                                                    (V.onmouseout = function (t) {
                                                        (h.drawState.dirty = !0),
                                                            (c.renderState.hover = !1),
                                                            c.skill.isJewel() ? c.skill.item.handleItemMouseout() : c.popup && !c.popup.editable && (c.popup.handleMouseout(), c.popup.destroy(), (c.popup = null)),
                                                            null !== c.similarNodeHighlighter &&
                                                                c.similarNodeHighlighter.end().done(
                                                                    (function (t, e) {
                                                                        return function () {
                                                                            t.similarNodeHighlighter === e && (t.similarNodeHighlighter = null);
                                                                        };
                                                                    })(c, c.similarNodeHighlighter)
                                                                ),
                                                            null !== c.pathHighlighterGroup && (c.pathHighlighterGroup.end(), (c.pathHighlighterGroup = null));
                                                    });
                                            }
                                        }
                                }
                            });
                        },
                    },
                    {
                        key: "drawNode",
                        value: function (t, e) {
                            e(t, this.getNodePositionInfo(t));
                        },
                    },
                    {
                        key: "drawPathBetweenNodes",
                        value: function (t, e, i, s) {
                            if (!t.isMastery() && !e.isMastery()) {
                                var a = this.getNodePositionInfo(t),
                                    n = this.getNodePositionInfo(e);
                                if (t.group.id != e.group.id || t.orbit != e.orbit) i(a, n);
                                else {
                                    var r = t.group.position.clone(),
                                        o = a.angle,
                                        l = n.angle,
                                        h = o < l;
                                    o = h ? a.angle : n.angle;
                                    var c = (l = h ? n.angle : a.angle) - o;
                                    if (c > Math.PI) l = (o = l) + (2 * Math.PI - c);
                                    s(r, o, l, this.orbitRadii[t.orbit]);
                                }
                            }
                        },
                    },
                    {
                        key: "drawLoading",
                        value: function (t) {
                            var e = C.translate("Loading") + "... " + Math.round(100 * t) + "%",
                                i = this.canvas.width / 2,
                                s = this.canvas.height / 2,
                                a = this.ctx.measureText(e);
                            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                                (this.ctx.fillStyle = "rgb(251,243,241)"),
                                (this.ctx.font = "20pt FontinBold"),
                                this.ctx.fillText(e, Math.round(i - a.width / 2), Math.round(s - 10));
                        },
                    },
                    {
                        key: "draw",
                        value: function () {
                            var t = this;
                            (this.drawState.active = !0),
                                this.calcTileGrid(),
                                (this.drawState.dirty || this.drawState.dirtyFullRedraw || !this.lastDrawBounds || this.lastDrawBounds.neq(this.viewPort.bounds)) &&
                                    ((this.lastDrawBounds = this.viewPort.bounds.clone()),
                                    this.foreachVisibleGridTile(function (e, i, s, a, n) {
                                        t.drawTilePos(i, s),
                                            t.ctx.drawImage(
                                                e.canvas,
                                                0,
                                                0,
                                                t.tileSize,
                                                t.tileSize,
                                                Math.round(a * t.tileSize - t.grid.visGridXviewPortShift),
                                                Math.round(n * t.tileSize - t.grid.visGridYviewPortShift),
                                                t.tileSize,
                                                t.tileSize
                                            );
                                    })),
                                this.drawMidCanvas(),
                                this.drawTopCanvas();
                            for (var e = 0, i = this.finalDrawFuncs.length; e < i; ++e) this.finalDrawFuncs[e]();
                            (this.finalDrawFuncs = []),
                                null !== this.errorMessage && ((this.ctx.fillStyle = "rgb(251,30,30)"), (this.ctx.font = "10pt FontinBold"), this.ctx.fillText(this.errorMessage, 10, this.canvas.height - 20)),
                                (this.drawState.dirty = !1),
                                (this.drawState.dirtyFullRedraw = !1),
                                (this.drawState.active = !1);
                        },
                    },
                    {
                        key: "drawImageTiled",
                        value: function (t, e, i, s, a, n, r, o) {
                            for (var l = t.width * i, h = t.height * s, c = r - a, d = o - n, u = 0, f = Math.ceil(c / l); u < f; ++u)
                                for (var v = u * l + a, p = 0, g = Math.ceil(d / h); p < g; ++p) {
                                    e.save(), e.translate(v, p * h + n);
                                    var y,
                                        w = t.width,
                                        k = l,
                                        m = t.height,
                                        P = h;
                                    if (u == f - 1) 0 !== (y = c % l) && ((k -= l - y), (w *= y / l));
                                    if (p == g - 1) 0 !== (y = Math.round(d) % Math.round(h)) && ((P -= h - y), (m *= y / h));
                                    e.drawImage(t, img.coords.x, img.coords.y, w, m, 0, 0, k, P), e.restore();
                                }
                        },
                    },
                    {
                        key: "drawTopCanvas",
                        value: function () {
                            var t = this;
                            this.debug && (this.drawState.topDirty = !0),
                                this.drawState.topDirty &&
                                    (this.topCtx.clearRect(0, 0, this.topCanvas.width, this.topCanvas.height),
                                    this.debug &&
                                        (this.foreachVisibleGridTile(function (e, i, s, a, n) {
                                            t.topCtx.save(),
                                                (t.topCtx.strokeStyle = "rgb(20,200,200)"),
                                                t.topCtx.strokeRect(a * t.tileSize - t.grid.visGridXviewPortShift, n * t.tileSize - t.grid.visGridYviewPortShift, t.tileSize, t.tileSize),
                                                t.topCtx.restore();
                                        }),
                                        this.foreachClickable(function (e) {
                                            var i = t.worldToScreen(e.point);
                                            t.topCtx.save(), (t.topCtx.strokeStyle = "rgb(20,200,200)"), t.topCtx.beginPath(), t.topCtx.arc(i.x, i.y, e.radius * t.viewPort.zoom, 0, 2 * Math.PI), t.topCtx.stroke(), t.topCtx.restore();
                                        }),
                                        this.drawDebug(),
                                        this.drawDebugGridInfo()),
                                    (this.drawState.topDirty = !1));
                        },
                    },
                    {
                        key: "drawMidCanvas",
                        value: function () {
                            this.midCtx.clearRect(0, 0, this.midCanvas.width, this.midCanvas.height),
                                this.midDrawObjects.foreachObject(function (t) {
                                    t.draw();
                                });
                        },
                    },
                    {
                        key: "getNodeRadius",
                        value: function (t) {
                            return t.notable ? 70 : t.isKeystone() ? 109 : t.isMastery() ? 90 : t.isJewel ? 70 : t.isClassStartNode() ? 200 : t.isAscendancyStartNode ? 40 : 51;
                        },
                    },
                    {
                        key: "getScreenWorldPosition",
                        value: function (t, e) {
                            return new s(this.viewPort.bounds.tl.x + t / this.viewPort.zoom, this.viewPort.bounds.tl.y + e / this.viewPort.zoom);
                        },
                    },
                    {
                        key: "worldToScreen",
                        value: function (t) {
                            return new s((t.x - this.viewPort.bounds.tl.x) * this.viewPort.zoom, (t.y - this.viewPort.bounds.tl.y) * this.viewPort.zoom);
                        },
                    },
                    {
                        key: "getTileWorldPosition",
                        value: function (t, e) {
                            var i = new s();
                            return (i.x = (t * this.tileSize) / this.viewPort.zoom + this.extent.tl.x), (i.y = (e * this.tileSize) / this.viewPort.zoom + this.extent.tl.y), i;
                        },
                    },
                    {
                        key: "drawTilePos",
                        value: function (t, e) {
                            var i = this.getTileWorldPosition(t, e);
                            return this.drawTile(this.grid.tiles[e][t], i, this.viewPort.zoom);
                        },
                    },
                    {
                        key: "getAscendancyPositionInfo",
                        value: function (t) {
                            var e = this.getNodePositionInfo(this.startNode).position,
                                a = 270,
                                n = 0,
                                r = 1,
                                o = Math.sqrt(e.x * e.x + e.y * e.y),
                                l = Math.abs(e.x) < 10 && Math.abs(e.y) < 10;
                            l || ((n = e.x / o), (r = -e.y / o));
                            var h = this.viewPort.zoom,
                                c = Math.atan2(n, r),
                                d = e.x + a * Math.cos(c + Math.PI / 2),
                                u = e.y + a * Math.sin(c + Math.PI / 2),
                                f = new s(d, u),
                                v = this.assets.get("ascendancyBackground", "Classes" + this.ascendancyClassName, h),
                                p = e.x + (a + v.height / h / 2) * Math.cos(c + Math.PI / 2),
                                g = e.y + (a + v.height / h / 2) * Math.sin(c + Math.PI / 2),
                                y = new s(p, g),
                                w = (new s(y.x - v.width / h / 2, y.y - v.height / h / 2), new s(y.x + v.width / h / 2, y.y + v.height / h / 2), new i());
                            (w.tl = new s(y.x - v.width / h / 2, y.y - v.height / h / 2)), (w.br = new s(y.x + v.width / h / 2, y.y + v.height / h / 2)), t && (e.inverseTranslate(t.tl), f.inverseTranslate(t.tl), y.inverseTranslate(t.tl));
                            var k = { distanceFromStartNodeCenter: a, distToCenter: o, dirX: n, dirY: r, isCentered: l, worldPos: e, ascButtonRot: c, buttonPoint: f, classArtImg: v, classArtImgPoint: y, classArtImgBounds: w };
                            if (this.ascendancyStartNode) {
                                var m = this.getNodePositionInfo(this.ascendancyStartNode).position,
                                    P = p - m.x,
                                    S = g - m.y;
                                (k.startNodeDX = P), (k.startNodeDY = S);
                            }
                            return k;
                        },
                    },
                    {
                        key: "drawStartNodeAscendancyButton",
                        value: function (t, e) {
                            var i = this;
                            if (this.ascendancyClassName) {
                                var s = this.viewPort.zoom,
                                    a = this.assets.get("ascendancy", this.ascendancyButton.state, s),
                                    n = a.height / s / 2,
                                    r = this.getAscendancyPositionInfo(e);
                                r.buttonPoint.clone().scale(s);
                                var o = r.worldPos;
                                o.scale(s),
                                    t.save(),
                                    t.translate(o.x, o.y),
                                    t.rotate(r.ascButtonRot),
                                    t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, -a.width / 2, (r.distanceFromStartNodeCenter - n) * s, a.width, a.height),
                                    t.restore();
                                var l = this.getAscendancyPositionInfo();
                                (this.ascendancyButton.clickable = new u(l.buttonPoint, a.height / s / 2)),
                                    (this.ascendancyButton.clickable.onmousemove = function () {
                                        "AscendancyButtonHighlight" != i.ascendancyButton.state && ((i.ascendancyButton.state = "AscendancyButtonHighlight"), (i.drawState.dirty = !0), (i.drawState.dirtyFullRedraw = !0));
                                    }),
                                    (this.ascendancyButton.clickable.onmouseout = function () {
                                        (i.ascendancyButton.state = "AscendancyButton"), (i.drawState.dirty = !0), (i.drawState.dirtyFullRedraw = !0);
                                    }),
                                    (this.ascendancyButton.clickable.onclick = function (t) {
                                        (i.ascendancyButton.state = "AscendancyButtonPressed"),
                                            (i.ascendancyClassPopupHidden = !i.ascendancyClassPopupHidden),
                                            (i.drawState.dirty = !0),
                                            (i.drawState.dirtyFullRedraw = !0),
                                            i.lastQuery && "" != i.lastQuery && i.highlightSearchQuery(i.lastQuery),
                                            (i.drawState.topDirty = !0);
                                    });
                            }
                        },
                    },
                    {
                        key: "isAscendancyGroupEnabled",
                        value: function (t) {
                            return t && t.isAscendancy && t.ascendancyName && t.ascendancyName === this.ascendancyClassName && !this.ascendancyClassPopupHidden;
                        },
                    },
                    {
                        key: "drawAscendancyClassBackground",
                        value: function (t, e) {
                            if (this.ascendancyClassPopupHidden || !this.ascendancyClassName) return !1;
                            var i = this.getAscendancyPositionInfo(e),
                                s = i.classArtImgPoint;
                            s.scale(this.viewPort.zoom);
                            var a = i.classArtImg;
                            a &&
                                (t.save(),
                                t.translate(s.x, s.y),
                                t.beginPath(),
                                t.arc(0, 0, a.width / 2, 0, 2 * Math.PI),
                                t.clip(),
                                t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, -a.width / 2, -a.height / 2, a.width, a.height),
                                t.restore());
                        },
                    },
                    {
                        key: "drawAscendancyClassText",
                        value: function (t, e) {
                            if (this.ascendancyClassPopupHidden || !this.ascendancyClassName) return !1;
                            var i = this.getAscendancyPositionInfo(e),
                                a = i.classArtImg,
                                n = i.classArtImgPoint;
                            n.scale(this.viewPort.zoom), t.save(), t.translate(n.x - a.width / 2, n.y - a.height / 2);
                            var r = this.ascendancyClasses[this.characterClass].ascendancies[this.ascendancyClass - 1];
                            if (r.flavourTextRect) {
                                var o = 0,
                                    l = 48 * this.viewPort.zoom;
                                t.font = Math.round(l) + "px FontinItalic";
                                var h = r.flavourTextRect,
                                    c = new s(h.x, h.y);
                                c.scale(this.viewPort.zoom);
                                var d = r.flavourText.split("\n");
                                for (var u in d) (o += Math.round(l + 4 * this.viewPort.zoom)), (t.fillStyle = "black"), t.strokeText(d[u], c.x, c.y + o), (t.fillStyle = "#".concat(r.flavourTextColour)), t.fillText(d[u], c.x, c.y + o);
                            }
                            t.restore();
                        },
                    },
                    {
                        key: "drawStartNodeBackground",
                        value: function (t, e, i, s, a) {
                            var n = a == this.characterClass,
                                r = "PSStartNodeBackgroundInactive";
                            if (n)
                                switch (a) {
                                    case this.constants.classes.StrClass:
                                        r = "centermarauder";
                                        break;
                                    case this.constants.classes.DexClass:
                                        r = "centerranger";
                                        break;
                                    case this.constants.classes.IntClass:
                                        r = "centerwitch";
                                        break;
                                    case this.constants.classes.StrDexClass:
                                        r = "centerduelist";
                                        break;
                                    case this.constants.classes.StrIntClass:
                                        r = "centertemplar";
                                        break;
                                    case this.constants.classes.DexIntClass:
                                        r = "centershadow";
                                        break;
                                    case this.constants.classes.StrDexIntClass:
                                        r = "centerscion";
                                }
                            var o = this.assets.get("startNode", r, i);
                            if (o) {
                                var l = o.width * s,
                                    h = o.height * s,
                                    c = l / 2,
                                    d = h / 2;
                                t.drawImage(o, o.coords.x, o.coords.y, o.width, o.height, Math.round(e.x - c), Math.round(e.y - d), Math.round(l), Math.round(h));
                            }
                            if (n) {
                                var u = Math.ceil(25 * this.viewPort.zoom);
                                t.font = u + "pt FontinRegular";
                                var f = (Math.PI / 180) * 300,
                                    v = e.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(f),
                                    p = e.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(f);
                                t.fillStyle = "rgb(235,46,16)";
                                var g = t.measureText(this.stats.getAttribute(this.constants.characterAttributes.Strength));
                                t.fillText(this.stats.getAttribute(this.constants.characterAttributes.Strength), v - g.width / 2, p + u / 2);
                                (f = (Math.PI / 180) * 60), (v = e.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(f)), (p = e.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(f));
                                t.beginPath(), (t.fillStyle = "rgb(1,217,1)");
                                g = t.measureText(this.stats.getAttribute(this.constants.characterAttributes.Dexterity));
                                t.fillText(this.stats.getAttribute(this.constants.characterAttributes.Dexterity), v - g.width / 2, p + u / 2);
                                (f = (Math.PI / 180) * 180), (v = e.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(f)), (p = e.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(f));
                                t.beginPath(), (t.fillStyle = "rgb(88,130,255)");
                                g = t.measureText(this.stats.getAttribute(this.constants.characterAttributes.Intelligence));
                                t.fillText(this.stats.getAttribute(this.constants.characterAttributes.Intelligence), v - g.width / 2, p + u / 2);
                            }
                        },
                    },
                    {
                        key: "drawGroupBackground",
                        value: function (t, e, i, s, a, n) {
                            if (e.background && e.background.image) {
                                var r = this.assets.get("groupBackground", e.background.image, a);
                                if (r) {
                                    var o = (e.background.offsetX || 0) * s,
                                        l = (e.background.offsetY || 0) * s;
                                    if (e.background.isHalfImage) {
                                        var h = r.width * n,
                                            c = h / 2;
                                        t.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, Math.round(i.x - c), Math.round(i.y - c), Math.round(h), Math.round(c)),
                                            t.save(),
                                            t.translate(Math.round(i.x), Math.round(i.y)),
                                            t.rotate(Math.PI),
                                            (c = Math.round(c)),
                                            t.translate(0, -c),
                                            t.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, -c, 0, h, c),
                                            t.restore();
                                    } else {
                                        var d = Math.round(r.width * n),
                                            u = Math.round(r.height * n),
                                            f = Math.round(i.x - d / 2 + o),
                                            v = Math.round(i.y - u / 2 + l);
                                        t.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, f, v, d, u);
                                    }
                                    if (e.nodes)
                                        for (var p in e.nodes)
                                            if (Object.hasOwnProperty.call(e.nodes, p)) {
                                                var g = e.nodes[p];
                                                if (g.active && g.isMastery() && g.masteryData) {
                                                    var y = this.assets.get("masteryActiveEffect", g.masteryData.activeEffectImage, a);
                                                    if (y) {
                                                        var w = y.width * n,
                                                            k = w / 2;
                                                        (w = Math.round(w)), t.drawImage(y, y.coords.x, y.coords.y, y.width, y.height, Math.round(i.x - k), Math.round(i.y - k), w, w);
                                                    }
                                                }
                                            }
                                }
                            }
                        },
                    },
                    {
                        key: "drawBackgroundTile",
                        value: function (t, e, i, s) {
                            var a = this.assets.get("background", "Background2", i);
                            if (a)
                                for (var n = e.x - this.extent.tl.x, r = e.y - this.extent.tl.y, o = a.width * s, l = a.height * s, h = n % o, c = r % l, d = 0, u = Math.ceil((this.tileSize + h) / o); d < u; ++d)
                                    for (var f = 0, v = Math.ceil((this.tileSize + c) / l); f < v; ++f) t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, Math.round(d * o - h), Math.round(f * l - c), Math.round(o), Math.round(l));
                        },
                    },
                    {
                        key: "drawGroupNodePaths",
                        value: function (t, e, i, s) {
                            var a = this;
                            if (s.contains(t.position)) {
                                var n = this.viewPort.zoom,
                                    r = this.getCurrentImageZoomLevel(),
                                    o = n / r;
                                t.foreachNode(function (s) {
                                    var l = a.getNodePositionInfo(s, t).position,
                                        h = a.getNode("root");
                                    l.inverseTranslate(i.tl),
                                        l.scale(n),
                                        void 0 === s.classStartIndex &&
                                            s.foreachOutNode(function (t) {
                                                var l = a.getNodePositionInfo(t).position;
                                                l.inverseTranslate(i.tl),
                                                    l.scale(n),
                                                    (s.isAscendancy && !t.isAscendancy) ||
                                                        t.isClassStartNode() ||
                                                        t.isAscendancyStartNode ||
                                                        t.isBlightedNode ||
                                                        a.drawPathBetweenNodes(
                                                            s,
                                                            t,
                                                            function (l, c) {
                                                                var d = l.position,
                                                                    u = c.position;
                                                                d.inverseTranslate(i.tl), d.scale(n), u.inverseTranslate(i.tl), u.scale(n);
                                                                var f = "Normal",
                                                                    v = a.assets.get("line", "LineConnector" + f, r),
                                                                    p = a.assets.get("line", "PSLineDeco" + (s.active || t.active ? "Highlighted" : ""), r);
                                                                if (
                                                                    ((s.active && t.active) || (a.atlas && N.has(h.outNodes, s.id) && t.active) ? (f = "Active") : (s.active || t.active) && (f = "Intermediate"),
                                                                    a.atlas && "Normal" != f && a.drawStraightPath(e, v, d, u, o),
                                                                    (v = a.assets.get("line", "LineConnector" + f, r)),
                                                                    a.drawStraightPath(e, v, d, u, o),
                                                                    p)
                                                                ) {
                                                                    var g = d.angleTo(u),
                                                                        y = Math.round(p.height / 2),
                                                                        w = Math.round((s.isAscendancy ? (s.isAscendancyStartNode ? 12 : s.notable ? 47 : 22) : s.keystone ? 86 : s.notable ? 50 : 25) * n),
                                                                        k = Math.round((s.isAscendancy ? (t.isAscendancyStartNode ? 12 : t.notable ? 47 : 22) : t.keystone ? 86 : t.notable ? 50 : 25) * n);
                                                                    e.save(),
                                                                        e.translate(Math.round(d.x), Math.round(d.y)),
                                                                        e.scale(o, o),
                                                                        e.rotate(g),
                                                                        e.drawImage(p, p.coords.x, p.coords.y, p.width, p.height, w, -y, p.width, p.height),
                                                                        e.restore(),
                                                                        e.save(),
                                                                        e.translate(Math.round(u.x), Math.round(u.y)),
                                                                        e.scale(o, o),
                                                                        e.rotate(g + Math.PI),
                                                                        e.drawImage(p, p.coords.x, p.coords.y, p.width, p.height, k, -y, p.width, p.height),
                                                                        e.restore();
                                                                }
                                                            },
                                                            function (l, h, c, d) {
                                                                l.inverseTranslate(i.tl), l.scale(n);
                                                                var u = "Normal",
                                                                    f = null;
                                                                s.active && t.active ? (u = "Active") : (s.active || t.active) && (u = "Intermediate"),
                                                                    a.atlas && "Normal" != u && ((f = a.assets.get("line", "Orbit" + t.orbit + "Normal", r)), a.drawArc(e, f, l, h - Math.PI / 2, c - Math.PI / 2, "Normal", o)),
                                                                    (f = a.assets.get("line", "Orbit" + t.orbit + u, r)),
                                                                    a.drawArc(e, f, l, h - Math.PI / 2, c - Math.PI / 2, u, o);
                                                            }
                                                        );
                                            });
                                });
                            }
                        },
                    },
                    {
                        key: "drawImageCentered",
                        value: function (t, e, i, s, a) {
                            var n = e.width * a,
                                r = n / 2,
                                o = e.height * a,
                                l = o / 2;
                            t.drawImage(e, e.coords.x, e.coords.y, e.width, e.height, Math.round(i.x - r), Math.round(i.y - l), Math.round(n), Math.round(o));
                        },
                    },
                    {
                        key: "foreachGroup",
                        value: function (t) {
                            for (var e in this.groups) t.call(this, this.groups[e]);
                        },
                    },
                    {
                        key: "foreachNode",
                        value: function (t) {
                            for (var e in this.nodes) if (!0 === t.call(this, this.nodes[e])) return;
                        },
                    },
                    {
                        key: "foreachClickable",
                        value: function (t) {
                            var e = this,
                                i = !this.ascendancyClassPopupHidden && this.getAscendancyPositionInfo();
                            this.foreachNode(function (s) {
                                if (null === s.clickable) return !1;
                                if (i && !s.isAscendancy) {
                                    if (s.isAscendancyStartNode) return !1;
                                    if (i.classArtImgBounds.contains(s.clickable.point)) return !1;
                                }
                                if (s.isAscendancy && !e.isAscendancyGroupEnabled(s.group)) return !1;
                                t.call(e, s.clickable);
                            }),
                                !this.ascendancyButton || !this.ascendancyButton.clickable || t.call(this, this.ascendancyButton.clickable);
                        },
                    },
                    {
                        key: "findNodes",
                        value: function (t) {
                            var e = [];
                            for (var i in this.nodes) {
                                var s = this.nodes[i];
                                t.call(this, s) && e.push(s);
                            }
                            return e;
                        },
                    },
                    {
                        key: "getNode",
                        value: function (t) {
                            return this.nodes[t];
                        },
                    },
                    {
                        key: "getGroup",
                        value: function (t) {
                            return this.groups[t];
                        },
                    },
                    {
                        key: "addNode",
                        value: function (t, e) {
                            this.nodes[t] = e;
                        },
                    },
                    {
                        key: "addGroup",
                        value: function (t) {
                            this.groups[t.getId()] = t;
                        },
                    },
                    {
                        key: "getOrbitSkillCount",
                        value: function (t) {
                            return this.skillsPerOrbit[t];
                        },
                    },
                    {
                        key: "getOrbitAngle",
                        value: function (t, e) {
                            var i = 0.017453293;
                            if (40 == e)
                                switch (t) {
                                    case 0:
                                        return this.getOrbitAngle(0, 12);
                                    case 1:
                                        return this.getOrbitAngle(0, 12) + 10 * i;
                                    case 2:
                                        return this.getOrbitAngle(0, 12) + 20 * i;
                                    case 3:
                                        return this.getOrbitAngle(1, 12);
                                    case 4:
                                        return this.getOrbitAngle(1, 12) + 10 * i;
                                    case 5:
                                        return this.getOrbitAngle(1, 12) + 15 * i;
                                    case 6:
                                        return this.getOrbitAngle(1, 12) + 20 * i;
                                    case 7:
                                        return this.getOrbitAngle(2, 12);
                                    case 8:
                                        return this.getOrbitAngle(2, 12) + 10 * i;
                                    case 9:
                                        return this.getOrbitAngle(2, 12) + 20 * i;
                                    case 10:
                                        return this.getOrbitAngle(3, 12);
                                    case 11:
                                        return this.getOrbitAngle(3, 12) + 10 * i;
                                    case 12:
                                        return this.getOrbitAngle(3, 12) + 20 * i;
                                    case 13:
                                        return this.getOrbitAngle(4, 12);
                                    case 14:
                                        return this.getOrbitAngle(4, 12) + 10 * i;
                                    case 15:
                                        return this.getOrbitAngle(4, 12) + 15 * i;
                                    case 16:
                                        return this.getOrbitAngle(4, 12) + 20 * i;
                                    case 17:
                                        return this.getOrbitAngle(5, 12);
                                    case 18:
                                        return this.getOrbitAngle(5, 12) + 10 * i;
                                    case 19:
                                        return this.getOrbitAngle(5, 12) + 20 * i;
                                    case 20:
                                        return this.getOrbitAngle(6, 12);
                                    case 21:
                                        return this.getOrbitAngle(6, 12) + 10 * i;
                                    case 22:
                                        return this.getOrbitAngle(6, 12) + 20 * i;
                                    case 23:
                                        return this.getOrbitAngle(7, 12);
                                    case 24:
                                        return this.getOrbitAngle(7, 12) + 10 * i;
                                    case 25:
                                        return this.getOrbitAngle(7, 12) + 15 * i;
                                    case 26:
                                        return this.getOrbitAngle(7, 12) + 20 * i;
                                    case 27:
                                        return this.getOrbitAngle(8, 12);
                                    case 28:
                                        return this.getOrbitAngle(8, 12) + 10 * i;
                                    case 29:
                                        return this.getOrbitAngle(8, 12) + 20 * i;
                                    case 30:
                                        return this.getOrbitAngle(9, 12);
                                    case 31:
                                        return this.getOrbitAngle(9, 12) + 10 * i;
                                    case 32:
                                        return this.getOrbitAngle(9, 12) + 20 * i;
                                    case 33:
                                        return this.getOrbitAngle(10, 12);
                                    case 34:
                                        return this.getOrbitAngle(10, 12) + 10 * i;
                                    case 35:
                                        return this.getOrbitAngle(10, 12) + 15 * i;
                                    case 36:
                                        return this.getOrbitAngle(10, 12) + 20 * i;
                                    case 37:
                                        return this.getOrbitAngle(11, 12);
                                    case 38:
                                        return this.getOrbitAngle(11, 12) + 10 * i;
                                    case 39:
                                        return this.getOrbitAngle(11, 12) + 20 * i;
                                }
                            else if (16 == e)
                                switch (t) {
                                    case 0:
                                        return 0;
                                    case 1:
                                        return 30 * i;
                                    case 2:
                                        return 45 * i;
                                    case 3:
                                        return 60 * i;
                                    case 4:
                                        return 90 * i;
                                    case 5:
                                        return 120 * i;
                                    case 6:
                                        return 135 * i;
                                    case 7:
                                        return 150 * i;
                                    case 8:
                                        return 3.14159274;
                                    case 9:
                                        return 210 * i;
                                    case 10:
                                        return 225 * i;
                                    case 11:
                                        return 240 * i;
                                    case 12:
                                        return 4.71238911;
                                    case 13:
                                        return 300 * i;
                                    case 14:
                                        return 315 * i;
                                    case 15:
                                        return 330 * i;
                                }
                            return (2 * Math.PI * t) / e;
                        },
                    },
                    {
                        key: "getOrbitRadius",
                        value: function (t) {
                            return this.orbitRadii[t];
                        },
                    },
                    {
                        key: "getNodePositionInfo",
                        value: function (t, e) {
                            var i = this.getOrbitRadius(t.orbit),
                                s = this.getOrbitAngle(t.orbitIndex, this.getOrbitSkillCount(t.orbit)),
                                a = e ? e.position.clone() : t.group.position.clone();
                            return (a.x -= i * Math.sin(-s)), (a.y -= i * Math.cos(-s)), { position: a, angle: s };
                        },
                    },
                    {
                        key: "calculateFlipPosition",
                        value: function (t, e, i) {
                            var s = (e - t) / i,
                                a = s % 1;
                            return 0 == parseInt(s) % 2 ? a : 1 - a;
                        },
                    },
                    {
                        key: "calculateLerpPosition",
                        value: function (t, e, i) {
                            return (e - t) / i;
                        },
                    },
                    {
                        key: "createDefaultHighlighterGroup",
                        value: function (t) {
                            var e = this;
                            return new P({
                                highlighters: [
                                    new k(this, {
                                        nodes: t.filter(function (t) {
                                            return t.group && !(t.isMastery() && !t.masteryData) && (!t.isAscendancy || e.isAscendancyGroupEnabled(t.group));
                                        }),
                                    }),
                                ],
                            });
                        },
                    },
                    {
                        key: "createDefaultHighlighterMastery",
                        value: function (t) {
                            var e;
                            return new P({
                                highlighters: [
                                    new k(this, {
                                        nodes: t.filter(function (t) {
                                            return t.isMastery();
                                        }),
                                        atlasMasteryOverlay: !1,
                                        animations:
                                            ((e = {}),
                                            _defineProperty(e, m.In, { speed: 500, fillColour: { start: new S(255, 255, 255, 0) }, strokeColour: { start: new S(255, 255, 255, 0.6), end: new S(255, 255, 255, 1) } }),
                                            _defineProperty(e, m.Default, {
                                                speed: 1e3,
                                                fillColour: { start: new S(255, 255, 255, 0), end: new S(255, 255, 255, 0) },
                                                strokeColour: { start: new S(255, 255, 255, 1), end: new S(255, 255, 255, 0.2) },
                                            }),
                                            _defineProperty(e, m.Out, { speed: 0, fillColour: { start: null, end: new S() }, strokeColour: { start: null, end: new S(255, 255, 255, 0) } }),
                                            e),
                                    }),
                                ],
                            });
                        },
                    },
                    {
                        key: "highlightSearchQuery",
                        value: function (t) {
                            var e,
                                i = this,
                                s = !0,
                                a = !0;
                            if (((this.lastQuery = t), ((("zh_TW" === window.PoELocale || "zh_CN" === window.PoELocale) && t.length >= 1) || t.length > 2) && (a = !1), !a)) {
                                t = t.toLowerCase();
                                var n = !this.ascendancyClassPopupHidden && this.getAscendancyPositionInfo(),
                                    r = this.findNodes(function (e) {
                                        if (e.isMastery() && !e.masteryData) return !1;
                                        if (e.isAscendancy && !i.isAscendancyGroupEnabled(e.group)) return !1;
                                        if (!e.skill || !e.skill.displayName) return !1;
                                        if (n && !e.isAscendancy && !i.ascendancyClassPopupHidden && e.clickable && n.classArtImgBounds.contains(e.clickable.point)) return !1;
                                        if (-1 != e.skill.displayName.toLowerCase().indexOf(t)) return !0;
                                        if (e.isMastery() && e.masteryData) {
                                            if (!e.masteryData.masteryEffects) return !1;
                                            for (var s = 0, a = e.masteryData.masteryEffects.length; s < a; ++s) {
                                                var r = e.masteryData.masteryEffects[s];
                                                for (var o in r.stats) if (-1 != r.stats[o].toLowerCase().indexOf(t)) return !0;
                                            }
                                        } else {
                                            if (!e.skill.skillDescription) return !1;
                                            for (s = 0, a = e.skill.skillDescription.length; s < a; ++s) if (-1 != e.skill.skillDescription[s].toLowerCase().indexOf(t)) return !0;
                                        }
                                        return !1;
                                    });
                                (e = this.createDefaultHighlighterGroup(r)), null !== this.searchHighlighter && e.copyStateFrom(this.searchHighlighter);
                            }
                            null !== this.searchHighlighter && (this.searchHighlighter.endImmediately(), (this.searchHighlighter = null), (s = !1)),
                                a || ((this.searchHighlighter = e), s ? this.searchHighlighter.begin() : this.searchHighlighter.beginDefault(e.start));
                        },
                    },
                    {
                        key: "highlightSimilarNodes",
                        value: function (t) {
                            var e = this;
                            if (null === t.similarNodeHighlighter) {
                                var i = this.findNodes(function (i) {
                                        var s = !e.ascendancyClassPopupHidden && e.getAscendancyPositionInfo();
                                        return (
                                            !(s && !i.isAscendancy && !e.ascendancyClassPopupHidden && i.clickable && s.classArtImgBounds.contains(i.clickable.point)) &&
                                            t.skill.displayName == i.skill.displayName &&
                                            (e.isAscendancyGroupEnabled(i.group) || !i.isAscendancy)
                                        );
                                    }),
                                    s = this.createDefaultHighlighterGroup(i);
                                (t.similarNodeHighlighter = s), s.begin();
                            }
                        },
                    },
                    {
                        key: "highlightSimilarMasteries",
                        value: function (t) {
                            if (null === t.similarNodeHighlighter) {
                                var e = this.findNodes(function (e) {
                                        return t.isMastery() && t.skill.displayName == e.skill.displayName;
                                    }),
                                    i = this.createDefaultHighlighterMastery(e);
                                (t.similarNodeHighlighter = i), i.begin();
                            }
                        },
                    },
                    {
                        key: "visitNodes",
                        value: function (t, e, i, s) {
                            var a = this.atlas,
                                n = [];
                            for (n.push(t), this.ascendancyClassName && n.push(this.ascendancyStartNode); n.length > 0; ) {
                                var r = n.pop(),
                                    o = r.skill.getHash();
                                void 0 === i[o] &&
                                    ((a && o == t.id) || s(r, a)) &&
                                    (e.push(r),
                                    (i[o] = !0),
                                    r.foreachNeighbourNode(function (t) {
                                        var e = t.skill.getHash();
                                        void 0 === i[e] && s(t) && n.push(t);
                                    }));
                            }
                        },
                    },
                    {
                        key: "visitBFS",
                        value: function (t, e, i, s) {
                            var a = [],
                                n = {},
                                r = {};
                            a.push(t), (n[t.skill.getHash()] = !0);
                            var o = function (t, e) {
                                    void 0 === r[e.skill.getHash()] && (r[e.skill.getHash()] = new y(e, t));
                                },
                                l = function (t) {
                                    return r[t.skill.getHash()];
                                };
                            for (o(0, t); a.length > 0; ) {
                                var h = a.shift(),
                                    c = (h.skill.getHash(), r[h.skill.getHash()]);
                                if (e(h)) return void s(c, r);
                                h.foreachNeighbourNode(function (t) {
                                    if (null !== t.skill.getHash() && i(t)) {
                                        if ((o(c.depth + 1, t), void 0 === n[t.skill.getHash()])) r[t.skill.getHash()].parents.push(h);
                                        else l(t).depth - 1 == c.depth && r[t.skill.getHash()].parents.push(h);
                                        void 0 === n[t.skill.getHash()] && ((n[t.skill.getHash()] = !0), a.push(t));
                                    }
                                });
                            }
                        },
                    },
                    {
                        key: "getHistoryUrl",
                        value: function () {
                            if (!this.isHistorySupported()) return "";
                            if (this.buildUrl) return "/build/" + this.buildUrl;
                            var t = [];
                            for (var e in this.passiveAllocation.allocatedSkills) t.push(e);
                            var i = [];
                            for (var e in this.passiveAllocation.allocatedExpansionSkills) i.push(e);
                            var s = [];
                            for (var e in this.passiveAllocation.allocatedEffects) s.push(parseInt(e) + (this.passiveAllocation.allocatedEffects[e] << 16));
                            var a = "";
                            return (
                                this.accountName && this.characterName && (a += "?accountName=" + this.accountName + (this.realm ? "&realm=" + this.realm : "") + "&characterName=" + this.characterName),
                                b(this.fullScreen, {
                                    characterClass: this.characterClass,
                                    ascendancyClass: this.ascendancyClassName ? this.ascendancyClass : 0,
                                    hashes: t,
                                    hashesEx: i,
                                    masteryEffects: s,
                                    version: this.version,
                                    realm: this.realm,
                                    atlas: this.atlas,
                                }) + a
                            );
                        },
                    },
                    {
                        key: "loadHistoryUrl",
                        value: function (e) {
                            var i = this;
                            e = decodeURIComponent(e.replace(/-/g, "+").replace(/_/g, "/"));
                            try {
                                e = Base64.atob(e);
                            } catch (t) {
                                this.errorMessage = "Failed to load build from URL. Please make sure it was copied correctly.";
                                return void this.events.pointsChanged.add(function t() {
                                    i.events.pointsChanged.remove(t), (i.errorMessage = null);
                                });
                            }
                            var s,
                                a,
                                n = new w();
                            n.setDataString(e);
                            var r = 0,
                                o = [],
                                l = [],
                                h = {};
                            switch (n.readInt()) {
                                case 4:
                                    for (s = n.readInt8(), a = n.readInt8(), r = n.readInt8(); n.hasData(); ) o.push(n.readInt16());
                                    break;
                                case 5:
                                    (s = n.readInt8()), (a = n.readInt8());
                                    for (var c = n.readInt8(), d = 0; d < c; ++d) o.push(n.readInt16());
                                    var u = n.readInt8();
                                    for (d = 0; d < u; ++d) l.push(n.readInt16());
                                    break;
                                case t.CurrentVersion:
                                    (s = n.readInt8()), (a = n.readInt8());
                                    for (c = n.readInt8(), d = 0; d < c; ++d) o.push(n.readInt16());
                                    for (u = n.readInt8(), d = 0; d < u; ++d) l.push(n.readInt16());
                                    var f = n.readInt8();
                                    for (d = 0; d < f; ++d) {
                                        var v = n.readInt();
                                        h[65535 & v] = v >>> 16;
                                    }
                                    break;
                                default:
                                    return null;
                            }
                            this.characterData && this.loadCharacterData(s, a, o, l, h),
                                this.atlas && (this.passiveAllocation.loadHashArray(o, l, h), this.events.historyUrlSet(this.getHistoryUrl()), this.fullRedraw()),
                                1 != r || this.fullScreen || this.toggleFullScreen(!0);
                        },
                    },
                    {
                        key: "drawViewportIntersectionPoint",
                        value: function (t, e) {
                            var i = this.viewPort.bounds.intersectionPoint(t, this.viewPort.position, 20);
                            !1 !== i &&
                                ((i = this.worldToScreen(i)).x < 5 ? (i.x += 1) : i.x > this.canvas.width - 5 && (i.x -= 2),
                                i.y < 5 ? (i.y += 1) : i.y > this.canvas.height - 5 && (i.y -= 2),
                                this.finalDrawFuncs.push(function () {
                                    e(i);
                                }));
                        },
                    },
                    {
                        key: "drawCircles",
                        value: function (t) {
                            var e = this;
                            N.values(this.jewelCircles).forEach(function (i) {
                                var s = null,
                                    a = null;
                                i.visual
                                    ? ((s = e.assets.get("jewelRadius", i.visual + "JewelCircle1")), (a = e.assets.get("jewelRadius", i.visual + "JewelCircle2")))
                                    : ((s = e.assets.get("jewelRadius", "JewelCircle1")), i.innerWidth && (a = e.assets.get("jewelRadius", "JewelCircle1Inverse")));
                                var n = Math.round(i.width),
                                    r = Math.round(n / 2);
                                if ((t.drawImage(s, s.coords.x, s.coords.y, s.width, s.height, i.x - r, i.y - r, n, n), a)) {
                                    var o = n,
                                        l = r;
                                    i.innerWidth && !i.visual && ((o = Math.round(i.innerWidth)), (l = Math.round(o / 2))), t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, i.x - l, i.y - l, o, o);
                                }
                            }),
                                (this.jewelCircles = {});
                        },
                    },
                ]),
                t
            );
        })();
        return (E.CurrentVersion = T), E;
    }),
    define("PoE/PassiveSkillTree/PassiveSkillTreeBuildControls", ["plugins", "PoE/PassiveSkillTree/PassiveSkillTree", "PoE/PassiveSkillTree/GenerateLink", "PoE/Helpers"], function (t, e, i, s) {
        return function (a) {
            (this.init = function () {
                (this.$controlsForm = t("#passiveControlsForm")),
                    (this.$classStartPoint = t("#classStartPoint")),
                    (this.$ascendancyClass = t("#ascendancyClass")),
                    (this.$permaLink = t("#permaLink")),
                    (this.$toggleFullScreenEl = t("#toggleFullScreen")),
                    (this.$treeLinkEl = t(".tree-link")),
                    (this.$window = t(window)),
                    (this.$controlsContainerEl = t("#passiveSkillTreeControlsContainer")),
                    (this.$controlsEl = t("#passiveSkillTreeControls")),
                    (this.$buildControlsEl = t("#buildControls")),
                    (this.$treePointsContainerEl = null),
                    (this.$popupContainerEl = t("#poe-popup-container")),
                    (this.$higlightSimilarEl = t("#highlightSimilarNodes")),
                    (this.$highlightShortestPathsEl = t("#highlightShortestPaths")),
                    (this.$searchBoxEl = t("#passiveSearchBox")),
                    (this.$resetEl = t("#resetSkillTree")),
                    (this.curHistoryUrl = ""),
                    (this.skillTree = !1),
                    (this.height = a.height),
                    (this.fullScreen = !!a.fullScreen),
                    (this.startClass = a.startClass),
                    (this.passiveSkillTreeData = a.passiveSkillTreeData),
                    (this.version = a.version),
                    (this.realm = a.realm),
                    (this.buildUrl = a.build ? a.build.id : null),
                    (this.buildTitle = a.build ? a.build.title : null),
                    (this.builds = (a.build && a.build.parts) || []);
                var n = this;
                window.top.location != document.location && (this.$treeLinkEl.show(), this.$toggleFullScreenEl.hide()), this.fullScreen && this.$toggleFullScreenEl.hide();
                var r = function () {
                    window.open(n.curHistoryUrl);
                };
                (this.setAscendancyOptions = function (e) {
                    for (var i in (n.$ascendancyClass.empty(), n.$ascendancyClass.append(t("<option></option>").attr("value", 0).text(s.translate("None"))), n.passiveSkillTreeData.classes[e].ascendancies)) {
                        var a = parseInt(i) + 1,
                            r = t("<option></option>").attr("value", a).text(n.passiveSkillTreeData.classes[e].ascendancies[i].name);
                        n.skillTree.ascendancyClass && a == n.skillTree.ascendancyClass && r.attr("selected", !0), n.$ascendancyClass.append(r);
                    }
                }),
                    (this.setCurrentBuildIndex = function (t) {
                        if ((n.$buildControlsEl.find("ul.options > li > a").removeClass("active"), n.$buildControlsEl.find("ul.options > li > a[data-index=" + t + "]").addClass("active"), t < n.builds.length)) {
                            var e = n.builds[t];
                            n.skillTree.reset(e), n.skillTree.passiveAllocation.loadHashArray(e.hashes, e.hashes_ex || [], e.mastery_effects || {});
                        }
                    }),
                    (this.skillTree = new e("passiveSkillTree", "poe-popup-container", this.fullScreen ? n.$window.width() : 916, this.fullScreen ? n.$window.height() : this.height, this.startClass, this.passiveSkillTreeData, {
                        events: {
                            classChosen: function (t, e) {
                                n.$classStartPoint.val(t), n.setAscendancyOptions(t);
                            },
                            historyUrlSet: function (t) {
                                (n.curHistoryUrl = t), n.$treeLinkEl.off("click").on("click", r);
                            },
                            buildUrlSet: function (t) {
                                n.buildUrl = t;
                            },
                            onload: function () {
                                setTimeout(function () {
                                    n.$controlsEl.slideDown(500);
                                }, 500),
                                    n.buildUrl && (n.$buildControlsEl.find("h2").text(n.buildTitle), n.$buildControlsEl.slideDown(500));
                            },
                            onFullScreenUpdate: function () {
                                return (
                                    n.$buildControlsEl.css("height", n.$window.height() - n.$controlsEl.height()),
                                    n.$controlsEl.css("width", n.$window.width()),
                                    { top: "0px", left: "0px", width: n.$window.width(), height: n.$window.height() - n.$controlsEl.height() }
                                );
                            },
                            onFullScreenBegin: function () {
                                (n.$treePointsContainerEl = t("#treePointsContainer")),
                                    n.$popupContainerEl.append(n.$treePointsContainerEl),
                                    n.$popupContainerEl.append(n.$controlsEl),
                                    n.$popupContainerEl.append(n.$buildControlsEl),
                                    n.$popupContainerEl.addClass("fullscreen"),
                                    n.$controlsEl.css("width", n.$window.width()).css("position", "fixed").css("bottom", "0px").css("left", "0px").css("z-index", 1e3),
                                    n.$buildControlsEl
                                        .css("height", n.$window.height() - n.$controlsEl.height())
                                        .css("position", "fixed")
                                        .css("top", "0px")
                                        .css("bottom", "0px")
                                        .css("left", "0px")
                                        .css("z-index", 1005),
                                    n.$toggleFullScreenEl.val(s.translate("Exit Full Screen (f)"));
                            },
                            onFullScreenEnd: function () {
                                n.$controlsEl.css("width", "auto").css("position", "relative"),
                                    n.$buildControlsEl.css("height", "auto").css("position", "relative"),
                                    n.$controlsContainerEl.append(n.$controlsEl),
                                    n.skillTree.containerEl.append(n.$buildControlsEl),
                                    n.skillTree.containerEl.append(n.$treePointsContainerEl),
                                    n.$popupContainerEl.removeClass("fullscreen"),
                                    n.$toggleFullScreenEl.val(s.translate("Full Screen (f)"));
                            },
                        },
                        fullscreen: n.fullScreen,
                        noFullscreenKey: n.fullScreen,
                        realm: n.realm,
                        version: n.version,
                        buildUrl: n.buildUrl,
                        readonly: !!n.buildUrl,
                        treeControls: this,
                    })),
                    this.skillTree.loadStateFromUrl(),
                    this.setCurrentBuildIndex(0),
                    this.$classStartPoint.change(function (t) {
                        n.skillTree.reset({ characterClass: t.target.value, ascendancyClass: 0, accountName: null, characterName: null });
                    }),
                    this.$ascendancyClass.change(function (t) {
                        n.skillTree.reset({ characterClass: n.skillTree.characterClass, ascendancyClass: t.target.value, accountName: null, characterName: null });
                    }),
                    this.$resetEl.click(function (t) {
                        n.skillTree.reset({ accountName: null, characterName: null });
                    }),
                    this.$toggleFullScreenEl.click(function (t) {
                        n.skillTree.toggleFullScreen();
                    }),
                    this.$permaLink.click(function () {
                        n.$permaLink.select();
                    }),
                    n.skillTree.isHistorySupported() || n.$permaLink.hide(),
                    this.$higlightSimilarEl.change(function (t) {
                        n.skillTree.settings.highlightSimilarNodes = n.$higlightSimilarEl.is(":checked");
                    }),
                    this.$highlightShortestPathsEl.change(function (t) {
                        n.skillTree.settings.highlightShortestPaths = n.$highlightShortestPathsEl.is(":checked");
                    }),
                    this.$searchBoxEl.keypress(function (t) {
                        t.stopPropagation();
                    }),
                    this.$searchBoxEl.keyup(function (t) {
                        n.skillTree.highlightSearchQuery(n.$searchBoxEl.val());
                    }),
                    t.each(this.builds, function (e, s) {
                        s.realm = n.realm;
                        var a = i(0, s),
                            r = t("<li>").append(t("<a>").attr("href", a).text(s.label).attr("data-index", e));
                        n.$buildControlsEl.find("ul.options").append(r);
                    }),
                    this.$buildControlsEl.on("click", "a", function (e) {
                        var i = t(this).attr("data-index");
                        n.setCurrentBuildIndex(i), e.preventDefault();
                    });
            }),
                this.init();
        };
    }),
    define("skilltree", ["PoE/PassiveSkillTree/PassiveSkillTree", "PoE/PassiveSkillTree/PassiveSkillTreeBuildControls"], function (t, e) {
        return { view: t, controls: e };
    });


(function () {
const data = {"89":"11162","94":"476","127":"2092","238":"6","240":"1205","258":"55146","265":"40508","292":"12169","367":"47312","420":"12720","444":"28995","465":"34144","476":"63965","487":"23507","529":"50338","544":"21460","570":"7688","651":"5591","662":"6982","720":"24677","739":"49415","758":"57560","857":"7023","861":"31257","869":"51998","885":"4750","903":"8566","918":"62214","922":"3554","930":"476","982":"19595","1006":"45657","1031":"3533","1105":"10143","1159":"30969","1201":"8139","1203":"42104","1205":"6507","1215":"11596","1252":"476","1325":"3452","1340":"32455","1346":"27879","1382":"63921","1405":"57839","1427":"15167","1461":"7187","1550":"29089","1568":"53118","1572":"1427","1593":"24155","1600":"48828","1609":"1031","1648":"3319","1652":"41251","1655":"30745","1675":"55646","1696":"5462","1697":"1734","1698":"19679","1722":"3533","1729":"1675","1734":"28535","1761":"25332","1767":"52655","1822":"29797","1891":"48878","1945":"61355","1957":"7285","2092":"2219","2094":"9149","2121":"2219","2151":"476","2185":"28076","2219":"1031","2225":"30302","2260":"238","2292":"7594","2336":"35185","2348":"1600","2355":"11688","2411":"5068","2454":"23616","2474":"49408","2550":"54142","2715":"36915","2785":"1891","2828":"5348","2841":"14505","2872":"42264","2913":"37584","2957":"476","2959":"20835","3009":"367","3042":"6570","3089":"476","3167":"17038","3184":"3184","3187":"238","3309":"32059","3319":"51404","3359":"14804","3362":"1031","3398":"23616","3424":"20844","3452":"61039","3469":"5197","3471":"14113","3533":"16882","3554":"14603","3634":"11489","3644":"11688","3651":"11046","3656":"3319","3676":"16882","3863":"27962","4011":"34510","4036":"30380","4105":"36452","4139":"9083","4177":"7136","4184":"28076","4207":"420","4242":"13374","4247":"29629","4269":"50515","4270":"238","4300":"1698","4336":"1031","4367":"1203","4378":"8533","4397":"29359","4432":"238","4481":"36859","4492":"10429","4494":"4849","4502":"238","4546":"27444","4568":"3863","4573":"36972","4656":"1031","4713":"41380","4750":"5197","4788":"11596","4833":"19858","4849":"33940","4854":"44824","4917":"19417","4940":"23690","4944":"6884","4973":"15086","4977":"6654","5018":"476","5022":"22647","5065":"29797","5068":"1891","5082":"43242","5087":"34434","5103":"46469","5126":"21297","5152":"2292","5197":"6797","5230":"11505","5233":"4973","5237":"238","5289":"12702","5296":"1031","5408":"46896","5415":"43725","5430":"22535","5443":"29026","5456":"1325","5462":"238","5560":"22090","5591":"476","5612":"64241","5613":"1031","5616":"3359","5629":"1031","5643":"61393","5726":"292","5743":"60949","5802":"6685","5819":"17315","5823":"6","5826":"29993","5865":"63135","5875":"37163","5916":"8027","5926":"982","5935":"12831","5972":"1031","6028":"3651","6038":"40059","6042":"20167","6043":"57264","6052":"19595","6108":"2348","6109":"1031","6113":"3992","6139":"64769","6204":"1031","6230":"32932","6233":"11820","6237":"8001","6245":"23456","6289":"52090","6338":"6588","6359":"55247","6363":"4300","6383":"1891","6384":"8732","6427":"4424","6446":"47321","6507":"240","6534":"19210","6538":"34191","6542":"22728","6580":"37663","6588":"9083","6615":"29049","6633":"18990","6654":"476","6685":"26456","6712":"930","6718":"55414","6728":"14870","6741":"41047","6764":"13273","6770":"4481","6785":"1203","6797":"476","6799":"63635","6884":"1648","6912":"21324","6913":"7898","6949":"4270","6967":"19730","6968":"9393","6981":"11515","7023":"240","7069":"59556","7082":"4546","7085":"19897","7092":"12831","7112":"25770","7136":"48698","7153":"28753","7162":"2785","7187":"36200","7263":"41119","7285":"5613","7335":"31371","7364":"37887","7374":"238","7388":"16602","7440":"5823","7444":"1891","7488":"6570","7503":"367","7555":"15290","7594":"33911","7609":"54872","7614":"34327","7634":"4707","7641":"12948","7688":"9432","7786":"11200","7828":"1600","7898":"23185","7918":"30471","7920":"94","7938":"25431","8001":"33903","8012":"37619","8027":"49047","8135":"7263","8139":"127","8198":"11700","8302":"16213","8348":"2081","8370":"30393","8410":"6685","8419":"11490","8426":"42104","8458":"16703","8500":"5197","8533":"63639","8544":"7641","8566":"43514","8592":"982","8620":"367","8624":"19098","8640":"15837","8643":"1031","8879":"1031","8920":"24067","8930":"4300","8938":"21170","8948":"9933","9014":"662","9015":"53114","9055":"60031","9083":"857","9149":"34144","9171":"15167","9194":"19506","9206":"1600","9213":"5348","9261":"17765","9262":"7162","9271":"19641","9294":"30842","9355":"367","9370":"930","9373":"476","9386":"64401","9392":"46469","9432":"25970","9458":"4424","9505":"40287","9511":"49047","9535":"32681","9567":"26294","9586":"21143","9650":"4247","9695":"238","9769":"9469","9786":"37501","9788":"30225","9864":"31508","9877":"19388","9976":"29552","9995":"17038","10016":"44988","10017":"4378","10031":"15451","10073":"1031","10115":"23066","10141":"12503","10143":"61259","10153":"9535","10166":"12169","10204":"4788","10221":"3634","10245":"8556","10282":"3089","10414":"26608","10490":"7285","10495":"9213","10511":"49254","10542":"25439","10555":"28424","10575":"22407","10594":"4247","10635":"8592","10661":"44941","10729":"7634","10763":"15144","10808":"60247","10829":"2219","10835":"33082","10843":"13231","10851":"6534","10893":"13559","10904":"40135","10992":"28311","11016":"1031","11018":"11568","11046":"17018","11088":"62303","11128":"1031","11162":"1600","11190":"28076","11200":"6949","11239":"49639","11334":"21929","11364":"476","11412":"11597","11420":"51559","11431":"11431","11455":"56075","11489":"16380","11490":"5443","11497":"1572","11505":"26148","11515":"12801","11551":"64426","11568":"31520","11596":"9393","11651":"38777","11659":"65485","11688":"476","11689":"23507","11700":"27879","11716":"367","11730":"30160","11784":"27308","11792":"1201","11811":"5743","11820":"34173","11850":"55926","11859":"10017","11924":"408","11984":"21075","12068":"1031","12125":"857","12143":"1609","12189":"238","12236":"15021","12239":"7023","12246":"476","12247":"23215","12250":"3992","12379":"6785","12382":"292","12407":"26298","12412":"15868","12415":"12801","12439":"1031","12503":"8556","12518":"6427","12536":"49481","12702":"55485","12720":"14767","12769":"45341","12783":"476","12794":"32024","12795":"62094","12801":"476","12809":"21634","12824":"19374","12831":"5972","12852":"1031","12873":"292","12878":"12878","12888":"8620","12913":"28758","12926":"48480","12948":"22728","13009":"238","13164":"44102","13168":"30335","13202":"51953","13219":"1675","13231":"238","13232":"19374","13273":"2121","13322":"3533","13375":"10835","13387":"6570","13498":"4546","13559":"57044","13573":"238","13714":"1031","13753":"2785","13862":"292","13885":"20852","13961":"3359","14001":"41595","14021":"15868","14040":"4944","14056":"16756","14057":"7614","14090":"476","14103":"31667","14113":"8732","14122":"8872","14151":"2392","14156":"11046","14157":"13782","14182":"5018","14209":"18670","14292":"26712","14384":"18901","14400":"11716","14419":"18770","14505":"12503","14603":"885","14606":"21602","14665":"9055","14726":"1675","14745":"8500","14767":"34625","14804":"22577","14813":"30693","14832":"8732","14930":"17821","14936":"7153","14996":"20050","15021":"476","15027":"27611","15046":"24256","15064":"19679","15081":"6534","15086":"42623","15117":"6113","15144":"13498","15163":"20142","15167":"1031","15228":"55085","15290":"43385","15344":"33718","15365":"3879","15400":"30110","15405":"23760","15409":"6384","15437":"53802","15438":"1031","15451":"5068","15549":"31222","15599":"13231","15614":"60737","15616":"3184","15631":"29543","15678":"18670","15711":"18703","15716":"34750","15727":"36226","15837":"5916","15842":"544","15852":"6967","15868":"4219","15973":"5622","16079":"476","16093":"20954","16123":"8732","16141":"6427","16167":"4573","16212":"1729","16218":"2311","16236":"19103","16306":"29630","16380":"8012","16544":"28753","16602":"24157","16703":"18769","16743":"15365","16745":"12475","16754":"1696","16756":"7153","16775":"12783","16790":"11456","16848":"16940","16851":"9373","16860":"1203","16882":"5197","16940":"53123","16954":"10282","16970":"5197","17018":"5865","17020":"238","17127":"3883","17171":"26023","17201":"23886","17236":"16970","17251":"903","17315":"2872","17352":"12407","17380":"11505","17383":"9505","17412":"17569","17421":"19782","17546":"7903","17566":"9786","17569":"17579","17579":"476","17608":"28503","17735":"13232","17749":"127","17788":"18670","17790":"50472","17814":"6139","17818":"39085","17821":"42981","17833":"15365","17849":"6616","17906":"11596","17908":"17569","17934":"9262","17988":"26067","18009":"10763","18025":"51748","18033":"2957","18174":"4207","18182":"12250","18240":"2828","18302":"15727","18309":"19595","18359":"18770","18379":"4977","18402":"19287","18574":"17018","18663":"54922","18670":"1031","18703":"33545","18707":"47471","18715":"40132","18747":"55247","18750":"8732","18767":"476","18769":"45329","18770":"49408","18865":"65308","18866":"2219","18901":"869","18990":"24229","19008":"12379","19050":"19750","19069":"51440","19083":"8419","19098":"4219","19103":"21330","19144":"31359","19210":"1891","19228":"25067","19261":"22315","19287":"1891","19374":"14745","19401":"476","19417":"11412","19501":"4036","19506":"63033","19587":"19595","19609":"33374","19635":"19261","19679":"3537","19711":"21184","19725":"11505","19730":"21389","19732":"11455","19749":"10204","19750":"45358","19782":"38023","19794":"57199","19858":"64395","19884":"1252","19897":"720","19919":"16860","20010":"36801","20018":"45436","20127":"1909","20142":"55676","20167":"3879","20228":"3314","20467":"6633","20480":"35185","20528":"41989","20546":"11568","20551":"476","20675":"4788","20730":"26608","20736":"9083","20807":"94","20812":"1031","20832":"61981","20835":"21228","20844":"1600","20852":"11456","20953":"1031","20954":"48124","20966":"1031","20987":"17566","21033":"224","21048":"1600","21075":"17038","21143":"857","21170":"3167","21184":"28658","21228":"27301","21262":"23185","21264":"40813","21297":"35436","21301":"55307","21330":"11455","21389":"48823","21413":"25738","21435":"63422","21460":"25178","21575":"12720","21602":"6553","21634":"52157","21650":"23407","21678":"48713","21693":"14157","21758":"238","21801":"9393","21835":"29797","21929":"1652","21934":"1572","21958":"11784","21973":"32227","21974":"12236","22061":"238","22062":"16380","22088":"63620","22090":"22647","22133":"11420","22217":"476","22261":"19287","22266":"5022","22285":"3676","22315":"1031","22356":"44955","22407":"7594","22423":"238","22472":"32117","22473":"238","22488":"29379","22497":"6","22535":"60619","22577":"10763","22618":"5103","22627":"3089","22637":"6052","22647":"17821","22702":"11730","22703":"1822","22728":"1891","22959":"14113","22970":"14505","22972":"62802","23027":"8624","23036":"238","23038":"39657","23066":"1340","23090":"21650","23169":"32249","23185":"15438","23199":"33508","23215":"10843","23225":"19598","23407":"42178","23438":"37639","23439":"4713","23449":"44362","23456":"15716","23471":"5935","23507":"57746","23540":"23407","23547":"6912","23572":"89","23616":"1031","23659":"41599","23690":"37403","23760":"5935","23881":"1427","23912":"476","23950":"22088","24050":"6770","24067":"9015","24083":"21170","24133":"34284","24155":"1203","24157":"15727","24229":"2185","24256":"48480","24324":"46842","24334":"4788","24362":"55772","24377":"45035","24383":"47306","24426":"42343","24432":"12146","24472":"4750","24481":"7634","24496":"5875","24528":"758","24552":"10141","24641":"5560","24643":"25332","24677":"476","24720":"18663","24721":"37504","24755":"4707","24772":"25682","24798":"772","24824":"367","24848":"27604","24865":"23507","24872":"1031","24914":"10555","25011":"10429","25031":"47059","25058":"55114","25067":"4713","25167":"25167","25168":"238","25178":"10153","25186":"10429","25222":"3870","25237":"13573","25260":"24677","25281":"11596","25324":"20987","25332":"29472","25349":"5826","25355":"35053","25367":"27929","25409":"43689","25411":"31513","25431":"18901","25439":"4833","25456":"56094","25511":"48878","25531":"1031","25535":"5826","25651":"61627","25682":"6654","25732":"54574","25757":"1891","25766":"5612","25770":"16079","25775":"1203","25781":"5875","25789":"1031","25796":"739","25831":"476","25933":"8027","25934":"21143","25959":"476","25970":"53013","26023":"41420","26067":"53123","26096":"19794","26148":"3883","26270":"11456","26294":"8833","26298":"869","26365":"17251","26456":"10843","26471":"476","26481":"34423","26523":"12407","26557":"39530","26564":"40645","26608":"6384","26620":"6799","26712":"16860","26714":"5082","26740":"476","26866":"6615","26960":"28878","27038":"2828","27055":"6064","27096":"15616","27119":"5430","27134":"42623","27137":"42041","27140":"22090","27163":"55380","27190":"7918","27193":"12169","27203":"29861","27235":"26608","27276":"30319","27283":"16743","27301":"12143","27307":"3883","27308":"30439","27323":"47062","27325":"6534","27371":"9586","27415":"9650","27444":"238","27536":"34215","27564":"11792","27575":"2121","27592":"1203","27604":"38180","27605":"26740","27611":"44788","27656":"6109","27659":"29993","27697":"34423","27709":"11364","27788":"63150","27865":"8460","27872":"45358","27929":"58218","27931":"6384","27962":"17251","28012":"5560","28034":"53493","28039":"8556","28076":"56186","28221":"1031","28265":"30110","28284":"11505","28311":"1203","28330":"63067","28424":"19140","28449":"32245","28503":"26557","28535":"44482","28574":"57011","28680":"10141","28753":"238","28754":"35663","28758":"8426","28782":"56967","28859":"39821","28862":"47059","28878":"61689","28884":"1105","28887":"39938","28903":"7634","28995":"8592","29005":"238","29033":"4219","29034":"238","29049":"52714","29061":"9392","29089":"41380","29104":"930","29171":"367","29185":"1031","29199":"7594","29292":"52407","29353":"476","29359":"5197","29379":"238","29381":"19730","29454":"1891","29472":"238","29543":"1652","29547":"1891","29549":"10017","29629":"11489","29781":"739","29797":"60989","29825":"4242","29856":"30338","29861":"13375","29870":"1600","29933":"59650","29937":"476","29993":"240","30030":"9769","30110":"53987","30155":"14384","30160":"7440","30205":"476","30225":"5456","30251":"27962","30302":"26564","30319":"94","30335":"57457","30338":"1031","30380":"43608","30393":"6507","30427":"16754","30439":"24324","30471":"5126","30547":"476","30658":"62490","30679":"21170","30691":"1031","30693":"58449","30733":"53123","30745":"60989","30767":"3009","30842":"238","30894":"55906","30926":"720","30974":"32176","31033":"19144","31080":"17383","31103":"23456","31137":"2092","31153":"12236","31197":"8732","31222":"34130","31257":"53652","31291":"8460","31292":"6507","31315":"40508","31316":"49459","31344":"40510","31359":"33582","31371":"476","31462":"13202","31471":"476","31501":"37584","31508":"15400","31513":"65108","31583":"22261","31585":"1568","31604":"11984","31619":"27444","31628":"12068","31703":"23950","31758":"2260","31818":"292","31819":"27697","31875":"1600","31931":"5591","31961":"23540","31973":"1203","31984":"19587","32024":"11190","32053":"4219","32059":"53042","32075":"5560","32091":"50382","32115":"23024","32117":"2081","32176":"38516","32210":"1031","32227":"22702","32241":"19750","32245":"18707","32251":"21264","32278":"292","32314":"651","32345":"12809","32364":"22852","32417":"16093","32431":"28887","32432":"13273","32455":"36281","32480":"18670","32482":"6109","32509":"1215","32514":"27323","32555":"2392","32640":"5082","32657":"9393","32662":"9971","32681":"9261","32710":"20228","32739":"1891","32802":"42981","32932":"33777","32942":"43491","32947":"37127","32992":"11046","33082":"16243","33098":"7786","33167":"5926","33179":"5926","33196":"58210","33287":"16236","33296":"7641","33310":"7614","33374":"3314","33435":"51881","33479":"8410","33545":"59866","33582":"51212","33645":"2598","33657":"16810","33678":"8732","33718":"26866","33725":"25456","33740":"21075","33755":"7162","33777":"68","33779":"31137","33783":"6633","33823":"16810","33864":"1031","33903":"56359","33923":"38129","33940":"48480","33943":"238","33954":"36551","33988":"2219","34009":"36949","34031":"1031","34098":"10808","34130":"1891","34144":"5197","34157":"476","34171":"29552","34173":"60002","34191":"1722","34207":"238","34225":"11688","34284":"42443","34306":"1031","34317":"8556","34327":"49415","34359":"4247","34400":"6785","34423":"238","34478":"238","34484":"885","34506":"4940","34510":"10017","34513":"10073","34552":"32657","34560":"20127","34591":"50197","34601":"26960","34660":"476","34661":"46904","34666":"44103","34678":"2474","34723":"45358","34750":"12794","34763":"43822","34880":"3992","34906":"238","34907":"52423","34927":"45358","34959":"13807","34973":"7069","35035":"3424","35038":"2510","35053":"48813","35118":"292","35192":"2411","35221":"11505","35255":"24720","35260":"265","35283":"1203","35288":"11850","35334":"11515","35362":"1600","35384":"11016","35436":"24858","35507":"885","35556":"12415","35568":"6042","35598":"12738","35663":"42009","35685":"15085","35706":"39211","35724":"720","35730":"9469","35737":"30658","35750":"14103","35791":"19098","35851":"27134","35859":"857","35894":"59423","35958":"55194","35992":"39443","36017":"53816","36047":"1031","36107":"1031","36121":"30626","36200":"43457","36221":"23616","36222":"39524","36225":"45033","36226":"2260","36242":"32640","36287":"6109","36371":"8624","36412":"13168","36452":"10843","36490":"59766","36542":"1031","36543":"19884","36585":"1346","36634":"6230","36678":"11792","36687":"23038","36704":"28995","36736":"48438","36761":"7828","36774":"36452","36801":"238","36858":"1698","36859":"24050","36874":"64077","36877":"11811","36915":"1600","36945":"34144","36949":"38922","36972":"20142","37078":"54791","37127":"47778","37163":"1031","37175":"43057","37191":"14156","37326":"33287","37403":"56029","37419":"662","37486":"6052","37492":"27038","37501":"36107","37504":"52789","37532":"32657","37569":"35568","37616":"6384","37619":"3089","37639":"1761","37663":"18770","37671":"40841","37690":"1371","37698":"8872","37785":"25355","37800":"1031","37884":"52412","37887":"4378","37895":"14384","37911":"4707","37999":"37800","38023":"238","38129":"49343","38148":"1652","38149":"238","38176":"6534","38180":"17988","38190":"1371","38207":"8556","38235":"32657","38246":"65224","38320":"2828","38344":"6534","38348":"5972","38377":"8732","38387":"34215","38508":"25732","38516":"42795","38520":"1600","38538":"48480","38539":"37175","38568":"21143","38579":"10204","38662":"7153","38664":"16790","38701":"4336","38772":"720","38777":"53558","38805":"45360","38836":"6685","38849":"34601","38864":"1031","38900":"7614","38906":"29185","38918":"48999","38921":"5230","38922":"49459","38947":"224","38989":"35992","38995":"265","39023":"23507","39085":"11239","39211":"27697","39332":"292","39338":"5826","39416":"35038","39443":"3359","39521":"476","39524":"52095","39530":"6289","39631":"45436","39648":"13807","39657":"4854","39665":"1891","39678":"12948","39713":"34098","39718":"59016","39725":"20966","39728":"40810","39743":"24133","39761":"37078","39768":"1031","39786":"37501","39790":"922","39814":"25067","39818":"26298","39821":"40291","39834":"24528","39841":"6685","39861":"45033","39916":"9009","39938":"1891","39986":"8135","40010":"28995","40059":"63293","40075":"6797","40100":"31103","40126":"238","40132":"15868","40135":"238","40196":"16810","40229":"6534","40271":"6570","40287":"4036","40291":"42485","40362":"61283","40366":"19228","40409":"62970","40439":"47059","40483":"34625","40508":"56460","40510":"59920","40535":"238","40637":"26528","40644":"30205","40645":"37647","40653":"23122","40705":"22261","40743":"22972","40751":"57615","40766":"11515","40776":"476","40810":"16848","40813":"28884","40841":"5612","40867":"31604","40907":"23407","40927":"32739","41016":"240","41047":"4269","41081":"25111","41082":"31371","41137":"54776","41190":"10843","41225":"3883","41250":"23215","41251":"238","41380":"57449","41415":"14113","41420":"46965","41472":"37326","41476":"758","41536":"476","41595":"57900","41599":"12407","41635":"30110","41689":"4269","41819":"32117","41866":"8643","41870":"36874","41891":"28782","41967":"2292","41970":"11455","41989":"32345","42006":"33098","42009":"24383","42041":"47065","42104":"367","42133":"50225","42161":"476","42178":"63425","42264":"65296","42293":"22852","42343":"54307","42361":"6570","42443":"62849","42485":"1159","42533":"14505","42623":"476","42632":"17383","42637":"5197","42649":"11645","42668":"56158","42686":"24362","42720":"55002","42731":"37584","42744":"22423","42760":"1822","42795":"58168","42800":"7920","42804":"44207","42837":"238","42900":"127","42907":"23185","42911":"23122","42917":"46471","42964":"4656","42981":"23951","43000":"15678","43057":"1767","43061":"55373","43133":"19210","43193":"10635","43303":"1609","43316":"2219","43328":"2185","43374":"367","43385":"14665","43412":"30338","43413":"1031","43457":"25431","43491":"8643","43495":"240","43514":"51420","43601":"5230","43608":"29629","43647":"14113","43684":"238","43689":"60781","43716":"6718","43787":"23760","43818":"6384","43822":"40705","43833":"8139","43988":"57257","44102":"30338","44103":"61198","44134":"62697","44179":"5230","44183":"32739","44184":"31928","44202":"238","44207":"38246","44297":"32816","44298":"6384","44316":"32657","44339":"7609","44347":"36490","44360":"42744","44362":"13559","44429":"34306","44465":"1031","44482":"57197","44529":"9392","44540":"10204","44562":"25367","44606":"15973","44624":"64509","44723":"4247","44788":"26620","44797":"53086","44799":"19210","44824":"15046","44908":"34191","44916":"1031","44922":"1031","44924":"7594","44941":"19732","44948":"51974","44955":"58032","44967":"26528","44983":"14090","44988":"65210","45019":"6507","45033":"6884","45035":"13498","45067":"1600","45175":"11455","45202":"5622","45227":"28076","45272":"367","45313":"27096","45329":"720","45341":"7187","45358":"11505","45360":"238","45372":"9586","45456":"20127","45486":"29089","45491":"2355","45558":"292","45593":"8500","45608":"61982","45646":"52407","45657":"27137","45680":"15727","45696":"15550","45788":"9009","45803":"29381","45810":"19919","45827":"43608","45838":"41689","45945":"10115","46092":"9171","46111":"43328","46127":"476","46136":"6113","46277":"15599","46289":"2474","46340":"32690","46344":"238","46408":"42804","46471":"14001","46578":"1203","46636":"35910","46665":"45358","46672":"4656","46694":"43457","46726":"22090","46730":"9933","46756":"40075","46761":"9213","46842":"63207","46896":"11489","46897":"2785","46904":"58831","46910":"15163","46952":"20050","46965":"52230","47030":"39211","47062":"7343","47065":"63251","47197":"14113","47251":"22627","47294":"11505","47306":"47484","47312":"13573","47362":"56066","47389":"9009","47421":"36704","47422":"885","47426":"42133","47427":"476","47471":"54629","47484":"7898","47507":"15727","47743":"21973","47778":"258","47873":"10409","47949":"5462","48007":"10141","48093":"12948","48099":"14384","48109":"33296","48118":"35724","48124":"13219","48144":"6588","48267":"16810","48275":"7594","48282":"5197","48287":"22407","48290":"12169","48298":"4177","48349":"11596","48362":"34144","48411":"9393","48438":"60501","48477":"16954","48480":"29825","48505":"2828","48508":"35038","48513":"7092","48556":"1066","48614":"17171","48660":"26148","48698":"34591","48713":"1031","48719":"23572","48760":"32115","48778":"238","48807":"18865","48813":"12888","48822":"13498","48823":"49379","48828":"1203","48859":"6588","48971":"918","48982":"6588","48999":"13851","49047":"22488","49109":"22090","49147":"21170","49153":"16745","49178":"29472","49254":"9567","49308":"8620","49318":"49645","49343":"8879","49379":"42686","49391":"14505","49408":"6245","49412":"12246","49415":"476","49416":"420","49445":"24721","49459":"19069","49515":"1031","49534":"11162","49538":"26096","49568":"17579","49571":"476","49588":"864","49605":"17934","49621":"45945","49639":"31703","49645":"18174","49651":"238","49652":"1203","49684":"6910","49772":"49969","49806":"8930","49820":"6384","49900":"476","49929":"56803","49969":"35685","49971":"12720","49978":"13961","50024":"9971","50029":"8920","50041":"7659","50071":"9083","50197":"50858","50225":"2474","50264":"15081","50288":"43988","50306":"17251","50338":"50690","50340":"23449","50360":"25714","50382":"1031","50422":"238","50472":"8073","50515":"12250","50540":"12503","50562":"11190","50570":"48713","50679":"50288","50690":"15842","50692":"55509","50757":"12169","50826":"38947","50845":"26298","50858":"10016","50862":"6359","50904":"1909","50969":"15365","51101":"1945","51108":"2715","51191":"12439","51212":"13164","51213":"34625","51219":"30969","51220":"25770","51235":"9392","51404":"7153","51420":"57226","51440":"930","51462":"39728","51492":"53884","51517":"903","51559":"63944","51748":"41870","51782":"61437","51786":"2185","51801":"1346","51856":"4336","51923":"30110","51953":"14745","51954":"1031","51974":"8732","51998":"41433","52074":"1205","52095":"7594","52099":"65400","52157":"15852","52220":"6427","52230":"31033","52407":"15081","52412":"1609","52423":"238","52462":"1205","52502":"25789","52522":"30319","52575":"51492","52632":"2081","52655":"4300","52714":"59151","52789":"63453","52848":"16351","52875":"5348","52904":"476","53002":"918","53005":"2474","53013":"9788","53018":"41026","53042":"420","53072":"918","53086":"38387","53114":"15437","53118":"64355","53123":"39790","53188":"14505","53213":"64816","53216":"5348","53279":"17908","53290":"5935","53292":"5065","53324":"7903","53365":"89","53456":"26740","53493":"44347","53517":"38568","53573":"65053","53574":"2092","53615":"26608","53652":"53757","53677":"18661","53732":"1371","53757":"13922","53793":"34207","53802":"15027","53816":"23225","53884":"45313","53945":"5591","53957":"19884","53987":"62767","54043":"238","54142":"861","54144":"18990","54159":"51462","54267":"2292","54279":"63417","54307":"23407","54338":"30926","54340":"5348","54354":"3359","54396":"15716","54413":"3883","54452":"238","54629":"12795","54645":"10843","54657":"918","54667":"10763","54694":"42917","54713":"58921","54776":"420","54791":"21413","54849":"8556","54868":"18661","54872":"61388","54887":"38568","54922":"11455","54954":"31153","55002":"45067","55021":"38664","55085":"4973","55114":"14606","55146":"41891","55152":"5230","55166":"21929","55190":"193","55194":"34506","55230":"6427","55247":"6043","55307":"1031","55332":"62103","55348":"43601","55380":"34666","55392":"10017","55414":"12415","55485":"49445","55491":"21801","55558":"39023","55563":"11364","55571":"2219","55643":"238","55646":"9971","55647":"53574","55648":"40705","55649":"30926","55676":"32431","55743":"11700","55750":"10073","55772":"56276","55804":"15727","55854":"48480","55867":"6038","55880":"62108","55913":"65456","55926":"476","55985":"58454","55993":"367","56001":"15451","56023":"4492","56029":"50029","56066":"22090","56075":"24426","56090":"18359","56094":"1006","56116":"23090","56128":"10141","56149":"1031","56158":"58474","56174":"11128","56186":"26002","56276":"34973","56295":"14767","56355":"1031","56359":"40743","56370":"1600","56381":"15163","56461":"34484","56509":"29379","56589":"26471","56595":"6912","56646":"1203","56648":"49621","56671":"22261","56716":"36736","56803":"35851","56807":"31819","56814":"476","56855":"1031","57030":"13782","57044":"1203","57061":"5743","57080":"476","57167":"17566","57199":"45317","57222":"6","57226":"46248","57240":"35568","57248":"476","57257":"57279","57259":"1031","57264":"476","57266":"94","57279":"40907","57283":"4944","57362":"50264","57404":"5613","57457":"7335","57565":"17421","57736":"476","57746":"476","57819":"5197","57839":"54713","57900":"10542","57953":"3537","57992":"3362","58032":"25058","58069":"23122","58168":"27190","58198":"64882","58210":"43000","58218":"38849","58244":"11200","58288":"20127","58402":"54354","58449":"15614","58453":"238","58454":"50845","58474":"11128","58540":"8556","58541":"7153","58545":"5197","58556":"11455","58603":"1550","58604":"6042","58649":"29033","58763":"50041","58803":"476","58816":"5348","58831":"36687","58854":"47312","58869":"11018","58968":"12794","59005":"5935","59009":"885","59013":"26608","59016":"10017","59070":"420","59151":"5289","59220":"38520","59252":"29543","59370":"1600","59423":"60989","59482":"739","59494":"739","59556":"60180","59605":"68","59606":"31628","59650":"1031","59699":"9392","59718":"5629","59728":"13273","59766":"3309","59800":"46952","59837":"19595","59861":"17020","59866":"6237","59920":"25309","59926":"127","59928":"12913","60002":"20832","60031":"39986","60090":"44922","60145":"8930","60169":"22423","60170":"10141","60180":"18025","60210":"10141","60247":"62791","60259":"1203","60388":"9769","60398":"476","60405":"3992","60440":"50904","60462":"25651","60472":"8012","60501":"28034","60529":"23199","60547":"6052","60554":"6","60592":"27718","60619":"31585","60648":"1822","60737":"35958","60769":"23509","60803":"45360","60834":"21801","60887":"31520","60942":"16790","60949":"1891","60989":"27140","61039":"52031","61198":"53573","61217":"1909","61259":"62817","61262":"238","61264":"3634","61283":"1031","61306":"2094","61308":"51108","61320":"15365","61327":"476","61343":"10204","61355":"44297","61372":"36017","61388":"7082","61393":"15286","61471":"50826","61529":"7023","61602":"1031","61627":"19083","61653":"1609","61689":"58198","61785":"4424","61804":"4977","61868":"7187","61875":"26528","61950":"5197","61981":"2550","61982":"48556","61992":"2828","62015":"1205","62017":"22472","62021":"56803","62042":"1031","62067":"50024","62069":"2348","62094":"46408","62103":"37","62108":"48878","62214":"15599","62217":"5022","62235":"20730","62303":"3879","62319":"12831","62363":"1201","62416":"9213","62429":"33558","62480":"20844","62490":"13273","62504":"35750","62506":"14933","62530":"476","62577":"15711","62588":"89","62694":"29797","62697":"22090","62712":"55085","62744":"17546","62767":"476","62791":"10661","62795":"1031","62802":"27119","62817":"48480","62831":"1031","62849":"56716","62853":"292","62970":"238","63027":"43328","63033":"41472","63048":"22472","63067":"4656","63135":"6052","63138":"15868","63139":"6685","63150":"2225","63184":"9393","63194":"8643","63207":"7555","63228":"11018","63251":"22133","63268":"857","63282":"23036","63398":"27697","63417":"1729","63422":"48614","63425":"35255","63439":"6718","63447":"25237","63453":"39761","63482":"6427","63490":"61355","63559":"21801","63583":"18574","63618":"39725","63620":"11455","63639":"2785","63649":"1031","63710":"6588","63723":"23616","63727":"21435","63795":"48109","63799":"238","63843":"17579","63845":"476","63861":"26148","63908":"33179","63921":"6233","63933":"49538","63944":"27203","63963":"6685","63965":"3676","63976":"33725","64024":"16380","64028":"64842","64042":"8556","64077":"21958","64128":"29993","64181":"3398","64210":"1031","64221":"19609","64235":"6109","64239":"8198","64241":"7903","64265":"12379","64355":"1609","64395":"49318","64401":"50382","64406":"10141","64426":"3879","64501":"4247","64509":"5743","64587":"238","64612":"13168","64709":"6785","64769":"10594","64816":"9469","64842":"16745","64878":"62767","65033":"46469","65034":"34750","65093":"27163","65097":"59605","65107":"34009","65108":"48807","65112":"16602","65153":"4494","65154":"857","65159":"39023","65167":"15973","65203":"4565","65210":"44562","65224":"41137","65273":"1405","65296":"16306","65308":"62577","65400":"1031","65427":"5103","65456":"476","65528":"89"};
localStorage.setItem('mapping', JSON.stringify(data));
})();

